from flask import Flask,send_from_directory,render_template, request, redirect, url_for,session,jsonify, make_response
import os
from  hashlib import sha256
from random import randint
from flask_cors import CORS


# Assuming `app` is your Flask application
app = Flask(__name__, static_folder="../client/dist")

app.secret_key = 'super_duper_secret_key_that_no_one_should_ever_know'

# app.config['SESSION_COOKIE_SAMESITE'] = 'None'
CORS(app, supports_credentials=True)


if __name__ == "__main__":
    app.run(debug=True)



# Login Page
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        # Handle login logic 
        user_name = request.form['username']
        password = request.form['password']
        user = validate_credentials(user_name, password)
        # save the user id and role in the session if the user exists
        if user['exists']:
            session['user_id'] = user['id']
            session['user_role'] = user['role']
            # redirect to the Dashboard page 
            # print('@signup ---- before redirect ---- session =',session)
            return redirect(url_for('dashboard'))
        else:
            error = 'Failed to login, wrong credentials.'
            # view function which is handles the route can return up to 3 values (tuple), first is the response body, second is the status code, third is the headers. Flask interprets the tuple without the need to create a Response object
            return render_template('login.html', error=error), 401
    
    # for GET requests
    if 'user_id' in session:
        # the user is already logged in so he should be redirected to teh dashboard
        return redirect(url_for('dashboard'))
    
    return render_template('login.html')

# Signup Page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Handle signup logic
        user_name = request.form['username']
        password = request.form['password']
        role = request.form['role']
        id = randint(100000000,999999999)
        file = open('users.txt','a')
        hashed_pass = simple_sha_hash(password)
        file.write(f'{user_name} {hashed_pass} {id} {role}\n') 
        file.close()
        # save the user id and role in the session and redirect to the Dashboard page
        session['user_id'] = id
        session['user_role'] = role
        # print('@signup ---- before redirect ---- session =',session)
        return redirect(url_for('dashboard'))
    
    # for GET requests
    if 'user_id' in session:
        # the user is already logged in so he should be redirected to teh dashboard
        return redirect(url_for('dashboard'))
    
    return render_template('signup.html')



@app.route('/logout')
def logout():
    # remove all is and role from session 
    session.clear()
    # redirect to the login page
    return redirect(url_for('login'))


@app.route('/api/dashboard')
def api_dashboard():
    print('@api/dashboard ------ session =',session)
    for i in (request.headers.keys()):
        print(i)
        print(request.headers[i])
    print(request.headers.keys())
    if 'user_id' in session:
        # get data from db 
        return jsonify({'data': 'some data','another_data': 'another data'})
    # unauthorized
    return jsonify({'error': 'unauthorized'}), 401

@app.route('/dashboard')
def dashboard():
    print('@dashboard ------ session =',session)
    for i in (request.headers.keys()):
        print(i)
        print(request.headers[i])
    if "user_id" not in session:
        return redirect(url_for('login'))
    
    return send_from_directory(app.static_folder, 'index.html')


# handle all other routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')




def validate_credentials(name,password):
    file = open('users.txt')
    hashed_pass = simple_sha_hash(password)
    for line in file:
        [stored_username,stored_password,stored_id,stored_role] = line.split(' ')
        if name == stored_username and hashed_pass == stored_password: 
            return{ 'exists': True,'id':stored_id, 'role': stored_role}
    return {'exists': False, 'role': None,'id':None}



def simple_hash(word):
    '''this is a very simple hashing function, will be used simulate the auth flow'''
    hash = 0
    for char in word:
        hash += ord(char)
    return hash

def simple_sha_hash(word):
    '''this is simple hashing function, uses SHA256 function, will be used to simulate the auth flow'''
    return sha256(word.encode('utf-8')).hexdigest()

def simple_generate_token():
    return str(randint(100000000,999999999))