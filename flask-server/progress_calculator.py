from datetime import datetime, timedelta, timezone
def calculate_progress(start_time, duration_value, duration_unit):
    """
    Calculate the progress percentage of a track.

    Parameters:
    start_time (str): ISO 8601 formatted start time.
    duration_value (str): The value of the duration.
    duration_unit (str): The unit of the duration ('hours', 'days', 'weeks', or 'months').

    Returns:
    float: The progress percentage of the track.
    """

    # Parse the start time
    start_time = datetime.fromisoformat(start_time.replace('Z', '+00:00'))

    # Convert duration value to integer
    duration_value = int(duration_value)

    # Calculate the end time based on the duration unit
    duration_units = {
        'hours': timedelta(hours=duration_value),
        'days': timedelta(days=duration_value),
        'weeks': timedelta(weeks=duration_value),
        'months': timedelta(days=duration_value * 30)  # Approximate
    }
    end_time = start_time + duration_units[duration_unit.lower()]

    # Get the current time
    current_time = datetime.now(timezone.utc)

    # Calculate progress
    total_duration = end_time - start_time
    elapsed_time = current_time - start_time

    # Progress percentage (capped at 100% if the current time is past the end time)
    progress_percentage = min((elapsed_time / total_duration) * 100, 100)

    return progress_percentage