import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = 'joemunga329@gmail.com'
    msg['Subject'] = 'New Contact Form Submission'

    body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login('your_email@gmail.com', 'your_password')
            server.sendmail(msg['From'], msg['To'], msg.as_string())
        return "Thank you for contacting us!"
    except Exception as e:
        return f"Sorry, something went wrong: {e}"

if __name__ == '__main__':
    app.run(debug=True)
