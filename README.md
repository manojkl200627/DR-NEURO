<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f9b8e,100:6dd5ed&height=220&section=header&text=Dr.%20Neuro&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=AI-Powered%20Healthcare%20Assistant&descAlignY=55&descSize=20" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=0F9B8E&center=true&vCenter=true&width=650&lines=Predicting+Diseases+from+Symptoms+with+ML;MERN+Stack+%2B+FastAPI+%2B+Scikit-learn;AI+Doctor+Chat+%7C+Diet+%7C+Medication+%7C+Workout" alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/FastAPI-AI%20Server-009688?style=for-the-badge&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/Scikit--Learn-ML%20Model-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"/>
<img src="https://img.shields.io/badge/License-Educational-lightgrey?style=for-the-badge"/>

<br/><br/>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="500">

</div>

<br/>

## 🧠 About Dr. Neuro

**Dr. Neuro** is an AI-powered healthcare web application built on the **MERN Stack**, **FastAPI**, and **Machine Learning**. It predicts possible diseases from user-selected symptoms and returns descriptions, medications, precautions, diet plans, and workout recommendations — plus an **AI Doctor Chat** for quick health guidance.

<br/>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=16&pause=1500&color=6DD5ED&center=true&vCenter=true&width=600&lines=%22Your+Health%2C+Understood+by+AI%22" />
</div>

<br/>

## ✨ Features

<table align="center">
<tr>
<td align="center" width="150">🤖<br/><b>AI Disease<br/>Prediction</b></td>
<td align="center" width="150">💬<br/><b>AI Doctor<br/>Chat</b></td>
<td align="center" width="150">💊<br/><b>Medicine<br/>Recommendations</b></td>
<td align="center" width="150">🥗<br/><b>Diet<br/>Suggestions</b></td>
</tr>
<tr>
<td align="center" width="150">🏃<br/><b>Workout<br/>Recommendations</b></td>
<td align="center" width="150">⚠️<br/><b>Disease<br/>Precautions</b></td>
<td align="center" width="150">🔐<br/><b>Secure<br/>Authentication</b></td>
<td align="center" width="150">📱<br/><b>Responsive<br/>MERN App</b></td>
</tr>
</table>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>


<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## 🤖 AI & Machine Learning

The prediction model is built using **Scikit-learn** and trained on a symptom–disease dataset.

### Libraries Used
- Scikit-learn
- Pandas
- NumPy
- Pickle

### 🔬 ML Pipeline

```mermaid
flowchart LR
    A[Symptom Dataset] --> B[Label Encoding]
    B --> C[Train-Test Split]
    C --> D[Model Training & Evaluation]
    D --> E[Disease Prediction]
    E --> F[Model Serialization - Pickle]
```

### Algorithms Tested

| Algorithm | Status |
|---|:---:|
| Support Vector Machine (SVM) | ✅ Final Model |
| Random Forest | 🌲 Tested |
| Gradient Boosting | 🚀 Tested |
| K-Nearest Neighbors (KNN) | 📍 Tested |
| Multinomial Naive Bayes | 📊 Tested |

**Final Model:** Support Vector Machine (Linear Kernel)

The trained model predicts diseases from symptoms and returns:

- 🩺 Disease Name
- 📖 Description
- 💊 Medications
- ⚠️ Precautions
- 🥗 Diet Plan
- 🏃 Workout Suggestions

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## 📂 Project Structure

```
Dr-Neuro
│
├── Ai-Mod/                 # FastAPI + AI Model
│   ├── data/
│   ├── predictAi-env/
│   └── main.py
│
├── server/                 # Node.js + Express Backend
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   └── utils/
│
└── ui-g/                   # React Frontend
    ├── src/
    ├── public/
    └── package.json
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## 🚀 Getting Started

### 1️⃣ Start AI Server (FastAPI)

```bash
cd Ai-Mod
python -m uvicorn main:app --reload
```
> Runs at `http://127.0.0.1:8000`

### 2️⃣ Start Backend

```bash
cd server
npm install
npm start
```
> Runs at `http://localhost:4000`

### 3️⃣ Start Frontend

```bash
cd ui-g
npm install
npm run dev
```
> Runs at `http://localhost:5173`

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,mongodb,fastapi,python,sklearn&theme=light" />

</div>

**Frontend:** React.js · Vite · Axios · CSS
**Backend:** Node.js · Express.js · MongoDB · JWT Authentication
**AI:** FastAPI · Python · Scikit-learn · Pandas · NumPy

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## 📌 Workflow

```mermaid
flowchart TD
    U([User]) --> R[React Frontend]
    R --> N[Node.js Backend]
    N --> F[FastAPI AI Server]
    F --> M[Machine Learning Model - SVM]
    M --> P[Disease Prediction]
    P --> O[Description • Medicines • Diet • Workout • Precautions]
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0f9b8e,100:6dd5ed&height=3&section=header" width="100%"/>

## ⚠️ Disclaimer

> Dr. Neuro is developed for **educational and research purposes only**. The predictions and recommendations are generated using Machine Learning and should **not** replace professional medical advice.

<br/>

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="120">

**Made with 🧠 + 💙 for smarter healthcare**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6dd5ed,100:0f9b8e&height=120&section=footer"/>

</div>
