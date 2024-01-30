

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



class Trainee(User):
    def __init__(self, id, name, photo_path, role, progress=None):
        super().__init__(id, name, photo_path, role)
        self.progress = progress if progress is not None else []  # this will be a list of Progress objects with default of empty list

    def get_profile_info(self):
        # Get the base profile info from the User class
        profile_info = super().get_profile_info()
        # Add progress information
        profile_info['progress'] = [{"track_id": prog['track_id'], "percentage": prog['percentage']} for prog in self.progress]
        return profile_info

    def update_track_progress(self, track_id, new_percentage):
        for prog in self.progress:
            if prog['track_id'] == track_id:
                prog['percentage'] = new_percentage
                return True
        return False  # Track not found in progress
    
    
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
            "id": self.id, "title": self.title, "start_time": self.start_time, "duration_unit": self.duration_unit, "duration_value": self.duration_value,  "description": self.description, "trainers": self.trainers, "trainees": self.trainees, "milestones": self.milestones, "resources": self.resources 
        }
   


