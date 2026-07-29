import React, { useState } from "react";
import "./PatientProfile.css";
import ddri from "../../assets/dr5.png"
const PatientProfile = ()=>  {
  const [patient, setPatient] = useState({
    avatar: ddri,
    username: "Sahana",
    firstName: "-",
    lastName: "-",
    nickname: "-",
    role: "Patient",
    displayName: "Rahul Patel",
    email: "sahana.patient@gmail.com",
    whatsapp: "@sahana",
    telegram: "@sahana",
    website: "www.healthportal.com",
    bio: "She is one very well patint Patient medical notes or biography goes here.",
    oldPassword: "",
    newPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  return (
    <div className="patient-container">


      <main className="profile-area">
        <div className="top-bar">
          <h2>Patient Profile</h2>
          <button className="save-btn">Save</button>
        </div>

        <div className="profile-grid">

          {/* Left Column */}
          <div className="left-card">
            <div className="avatar-box">
              <img src={patient.avatar} alt="avatar" className="big-avatar" />

              <label className="upload-btn">
                Upload Photo
                <input type="file" />
              </label>
            </div>

            <div className="password-section">
              <label>Old Password</label>
              <input type="password" placeholder="********" name="oldPassword" onChange={handleChange} />

              <label>New Password</label>
              <input type="password" placeholder="********" name="newPassword" onChange={handleChange} />

              <button className="change-btn">Change Password</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-card">
            <h3 className="section-title">Profile Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Username</label>
                <input name="username" value={patient.username} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>First Name</label>
                <input name="firstName" value={patient.firstName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Nickname</label>
                <input name="nickname" value={patient.nickname} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input name="role" value={patient.role} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Last Name</label>
                <input name="lastName" value={patient.lastName} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Display Name</label>
                <input name="displayName" value={patient.displayName} onChange={handleChange} />
              </div>
            </div>

            <h3 className="section-title">Contact Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input name="email" value={patient.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>WhatsApp</label>
                <input name="whatsapp" value={patient.whatsapp} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Website</label>
                <input name="website" value={patient.website} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Telegram</label>
                <input name="telegram" value={patient.telegram} onChange={handleChange} />
              </div>
            </div>

            <h3 className="section-title">About the Patient</h3>

            <textarea
              name="bio"
              value={patient.bio}
              onChange={handleChange}
              className="bio-box"
            />

          </div>
        </div>
      </main>
    </div>
  );
}

export default PatientProfile