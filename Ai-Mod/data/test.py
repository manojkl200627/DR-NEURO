import sys
import json
import os


print(f"Python script started", file=sys.stderr)
print(f"Working directory: {os.getcwd()}", file=sys.stderr)
print(f"Script location: {os.path.dirname(os.path.abspath(__file__))}", file=sys.stderr)
print(f"Files in directory: {os.listdir('.')}", file=sys.stderr)


required_files = ['svc.pkl', 'symtoms_df.csv', 'precautions_df.csv', 'workout_df.csv', 
                 'description.csv', 'medications.csv', 'diets.csv']

for file in required_files:
    exists = os.path.exists(file)
    print(f"{file}: {'Found' if exists else 'MISSING'}", file=sys.stderr)


result = {"status": "success", "message": "Python test completed", "input": sys.argv[1]}
print(json.dumps(result))