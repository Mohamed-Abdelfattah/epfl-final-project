

class User:
    def __init__(self, id, name, photo_path, role):
        self.id = id
        self.name = name
        self.photo_path = photo_path
        self.role = role

    def get_profile_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo_path": self.photo_path,
            "role": self.role
        }

class Trainer(User):
    def __init__(self, id, name, photo_path, role, tracks=None):
        super().__init__(id, name, photo_path, role)
        if tracks is None:
            tracks = []
        self.tracks = tracks  # List of track IDs

    def assign_to_track(self, track_id):
        if track_id not in self.tracks:
            self.tracks.append(track_id)

    def unassign_from_track(self, track_id):
        if track_id in self.tracks:
            self.tracks.remove(track_id)

class Trainee(User):
    def __init__(self, id, name, photo_path, role, progress=None):
        super().__init__(id, name, photo_path, role)
        self.progress = progress if progress is not None else []  # this will be a list of Progress objects with default of empty list

    def get_profile_info(self):
        # Get the base profile info from the User class
        profile_info = super().get_profile_info()
        # Add progress information
        profile_info['progress'] = [{"track_id": prog.track_id, "percentage": prog.percentage} for prog in self.progress]
        return profile_info

    def update_track_progress(self, track_id, new_percentage):
        for prog in self.progress:
            if prog.track_id == track_id:
                prog.percentage = new_percentage
                return True
        return False  # Track not found in progress
    
    # ========================================================================================================= the plan was to represent all the data with classes after retrieving it from a sql database, but cause i used json file as a database, there is no need to use classes, but leaving the below classes to be used in case i changed to sql database =========================================================================================================

class Track:
    def __init__(self, id, title, start_time, duration_unit, duration_value, description, trainers=None, trainees=None, milestones=None, resources=None):
        self.id = id
        self.title = title
        self.start_time = start_time
        self.duration_unit = duration_unit
        self.duration_value = duration_value
        self.description = description
        self.trainers = trainers if trainers is not None else []  # This will be a list of trainer IDs with default of empty list
        self.trainees = trainees if trainees is not None else []  # This will be a list of trainee IDs with default of empty list
        self.milestones = milestones if milestones is not None else []  # List of Milestone objects with default of empty list
        self.resources = resources if resources is not None else []  # List of Resource objects with default of empty list

    # convert to dictionary
    def to_dict(self):
        return {
            "id": self.id, "title": self.title, "start_time": self.start_time, "duration": (self.duration_value + ' ' + self.duration_unit), "description": self.description, "trainers": self.trainers, "trainees": self.trainees, "milestones": self.milestones, "resources": self.resources 
        }
    def add_trainer(self, trainer_id):
        if trainer_id not in self.trainers:
            self.trainers.append(trainer_id)

    def remove_trainer(self, trainer_id):
        if trainer_id in self.trainers:
            self.trainers.remove(trainer_id)

    def add_trainee(self, trainee_id):
        if trainee_id not in self.trainees:
            self.trainees.append(trainee_id)

    def remove_trainee(self, trainee_id):
        if trainee_id in self.trainees:
            self.trainees.remove(trainee_id)

    def add_milestone(self, milestone):
        self.milestones.append(milestone)

    def remove_milestone(self, milestone_id):
        self.milestones = [milestone for milestone in self.milestones if milestone.id != milestone_id]

    def add_resource(self, resource):
        self.resources.append(resource)

    def remove_resource(self, resource_id):
        self.resources = [resource for resource in self.resources if resource.id != resource_id]

class Milestone:
    def __init__(self, id, title, due_date, description):
        self.id = id
        self.title = title
        self.due_date = due_date
        self.description = description

    def update_due_date(self, new_due_date):
        self.due_date = new_due_date

class Resource:
    def __init__(self, id, title, description, url):
        self.id = id
        self.title = title
        self.description = description
        self.url = url

    def update_url(self, new_url):
        self.url = new_url

class Progress:
    def __init__(self, track_id, percentage):
        self.track_id = track_id
        self.percentage = percentage

    def update_progress(self, new_percentage):
        if 0 <= new_percentage <= 100:
            self.percentage = new_percentage
            return True
        return False  # Percentage not updated, invalid value