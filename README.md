# 💇✨ **Masalah Salon & Spa Website** ✨💅

Welcome to the **Masalah Salon & Spa** website, designed to provide a seamless experience for clients to book appointments, browse through the portfolio, and connect with the salon. The site is fully responsive, interactive, and user-friendly.

🔗 **[Visit the Deployed Site](https://massalah-mvp.netlify.app)**  
📝 **[Read the Project Blog](https://www.linkedin.com/pulse/creating-masalah-salon-spa-website-journey-from-concept-mungai-bko3c)**  
👤 **[Find me on LinkedIn](https://www.linkedin.com/in/joseph-mungai-379193202)**

---

## 🚀 **Getting Started**

### 📥 **Installation**

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**  
    ```bash
    git clone https://github.com/yourusername/masalah-salon-spa.git
    ```

2. **Navigate to the directory**  
    ```bash
    cd masalah-salon-spa
    ```

3. **Install dependencies (optional)**  
    ```bash
    npm install
    ```

4. **Run the project**  
    Simply open `index.html` in your browser to view the website.

---

## 🎨 **Features**

- 📅 **Booking System**: Clients can easily book appointments that are stored in Google Sheets.
- 📸 **Gallery**: Preview previous salon work.
- 📱 **Responsive Design**: Accessible on all devices, mobile or desktop.
- 🔗 **Social Media Integration**: Connect with the salon on various platforms.

---


## 🔧 **Usage**

- **Clients**: Explore services, view the portfolio, and book appointments.
- **Salon Owners**: Manage bookings via Google Sheets for easier access and tracking.

---

## 🤝 **Contributing**

We welcome contributions to improve this project. Here’s how you can help:

1. **Fork this repository**.
2. **Create a new branch**:  
    ```bash
    git checkout -b feature-branch
    ```
3. **Make your changes**.
4. **Commit your changes**:  
    ```bash
    git commit -m 'Add a feature'
    ```
5. **Push to your branch**:  
    ```bash
    git push origin feature-branch
    ```
6. **Create a Pull Request**.

---

## ⚙️ **Core Technologies**

This project was built using:

- **HTML**: Structure and layout of the site.
- **CSS**: Styling with additional **Bootstrap** for responsiveness.
- **JavaScript**: Functionality and interactivity.
- **Google Apps Script**: For handling form submissions to Google Sheets.

### **Key Code Snippet**: Appointment Form Submission

```javascript
function submitForm() {
  var formData = {
    fullName: document.getElementById('fullName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    service: document.getElementById('service').value,
    availableDate: document.getElementById('availableDate').value,
    appointmentTime: document.getElementById('appointmentTime').value
  };
  
  google.script.run.submitData(formData);
}
