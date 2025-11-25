# app.py
from flask import Flask, render_template
from models import db
from routes import contact_bp

app = Flask(__name__)

# --- Database Configuration ---
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# --- Create tables ---
with app.app_context():
    db.create_all()

# --- Register Blueprint ---
app.register_blueprint(contact_bp)

# --- Existing Routes ---
@app.route('/')
def index():
    return render_template('index.html', title="Home")

@app.route('/home')
def home():
    return render_template('home.html', title="Services")

@app.route('/about')
def about():
    return render_template('about.html', title="About")

@app.route('/projects')
def projects():
    return render_template('projects.html', title="Projects")

if __name__ == '__main__':
    app.run(debug=True)
