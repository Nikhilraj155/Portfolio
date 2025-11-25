# routes.py
from flask import Blueprint, render_template, request, redirect
from models import db, Contact

contact_bp = Blueprint('contact_bp', __name__)

@contact_bp.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        Phone = request.form['Phone']
        message = request.form['message']

        new_contact = Contact(name=name, email=email, Phone=Phone, message=message)
        db.session.add(new_contact)
        db.session.commit()
        return redirect('/thankyou')

    return render_template('contact.html', title="Contact")

@contact_bp.route('/thankyou')
def thankyou():
    return render_template('thankyou.html', title="Thank You")
