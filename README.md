# AEGIS

![404 Not Found](logo.webp)

**Dataset Used For Training:** https://www.kaggle.com/datasets/drabdulbari/smartphone-imu-road-accident-detection-dataset

AEGIS is an intelligent emergency detection system designed to identify potential crashes and dangerous motion anomalies and respond to them as quickly as possible.

The system uses a **layered detection approach**, progressively analyzing additional signals to validate an incident and reduce false positives.

### Detection Layers

* **Layer 1 — Initial Anomaly Detection**

  * Analyzes unusual acceleration and rotational movement.
  * Detects sudden impacts, abnormal motion, or movement patterns that could indicate a crash.

* **Layer 2 — Secondary Validation**

  * Analyzes physical movement and surrounding sound.
  * Detects unusually high movement or loud sounds that may provide additional evidence of an incident.
  * Helps distinguish genuine emergencies from false alarms.

* **Layer 3 — Contextual Verification**

  * Tracks location, speed, and movement over time.
  * Detects unusual speed drops or situations where a vehicle remains stationary for an unusually long period.
  * Uses this additional context to determine whether an incident requires escalation.

When multiple signals indicate a serious incident, AEGIS can initiate an emergency response by **alerting designated emergency contacts and emergency services**, while providing critical information such as the person's **location, medical information, and detected incident details**.

The overall goal of AEGIS is to **detect potential emergencies early, intelligently verify them, and get the right help to the right place as quickly as possible.**

---

## Tech Stack

### Machine Learning

* **Python** — Data processing (pandas, numpy, matplotlib) and machine learning development
* **Jupyter Notebook** — Model experimentation, analysis, and development
* **Scikit-learn** — Machine learning and model implementation
* **Logistic Regression** — Used for anomaly classification and prediction

### Backend

* **Node.js**
* **Express.js** — Backend API and server-side application logic
* **WebSockets** — Planned for real-time sensor and anomaly data transfer

### Frontend

* **React**

The architecture is designed to allow sensor data to flow through the detection pipeline in real time, with the backend coordinating communication between the detection system and the user-facing application.

---

## File Structure

```text
aegis/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── notebook/
│   ├── dataset.csv
│   └── notebook.ipynb
│
├── .gitignore
├── LICENSE
└── README.md
```

### Directory Overview

* **`backend/`** — Contains the server-side application and API structure for AEGIS.

  * **`controllers/`** — Handles application logic for incoming requests.
  * **`middlewares/`** — Contains middleware used during request processing.
  * **`models/`** — Defines the data models used by the backend.
  * **`routes/`** — Contains API route definitions.
  * **`utils/`** — Contains reusable backend utilities and helper functions.
  * **`db.js`** — Handles database-related configuration and connectivity.
  * **`index.js`** — Entry point for the backend server.
  * **`package.json` / `package-lock.json`** — Backend dependencies and project configuration.

* **`notebook/`** — Contains the machine-learning experimentation and dataset used during development.

  * **`notebook.ipynb`** — Jupyter Notebook containing the ML experimentation and anomaly-detection work.
  * **`dataset.csv`** — Dataset used for model development and analysis.

* **`.gitignore`** — Specifies files and directories that should not be tracked by Git.

* **`LICENSE`** — Project license.

* **`README.md`** — Project documentation.

---

## Future Development

AEGIS is currently in an early development stage. The **machine-learning API and authentication system are currently implemented**, while the remaining layers of the detection and emergency-response pipeline are planned for future development.

### Real-Time Data Transfer

* Implement **WebSocket-based communication** for continuous, real-time transfer of sensor and detection data.
* Allow live sensor readings and anomaly events to be communicated between the detection system, backend, and frontend.
* Enable the application to react to detected anomalies without requiring repeated API requests.

### Motion Anomaly Detection

* Implement the actual **motion anomaly detection pipeline** for accelerometer and gyroscope data.
* Integrate sensor readings with the existing ML API.
* Detect abnormal movement patterns that could indicate a crash or dangerous event.
* Develop appropriate thresholds and model-based validation to reduce false positives.

### Layer 2 — Secondary Validation

The second detection layer is yet to be implemented and will incorporate additional signals to validate potential incidents.

* Implement **motion sensor anomaly detection**.
* Implement **microphone-based anomaly detection** for unusually loud sounds or sudden acoustic events.
* Combine Layer 2 signals with Layer 1 results to improve confidence in detected incidents.
* Develop logic for determining when an anomaly should progress to the next detection layer.

### Layer 3 — Contextual Verification

The third detection layer is also planned for future implementation.

* Implement **GPS-based tracking**.
* Monitor changes in location and movement over time.
* Detect **unusual speed dips or sudden reductions in speed**.
* Detect when a vehicle remains **stationary at the same location for an unusually long period of time**.
* Use GPS and movement history as additional context when determining whether an incident is genuine.
* Integrate Layer 3 results with the previous detection layers before triggering an emergency response.

### Emergency Response System

Future development will connect the anomaly detection pipeline to the emergency-response system.

* Implement automated escalation based on the severity and confidence of a detected incident.
* Notify registered emergency contacts when a serious incident is detected.
* Integrate emergency-service communication where appropriate.
* Share relevant information such as **current location, medical information, and detected incident details**.
* Build safeguards to prevent accidental or repeated emergency alerts.

### Frontend

* Develop the planned **React-based frontend**.
* Provide a real-time dashboard for monitoring sensor data and detected anomalies.
* Display location, incident status, detection-layer progress, and emergency-response information.
* Integrate the frontend with the backend through APIs and WebSockets.

### Overall Development Roadmap

```text
Current
  │
  ├── ML API                         ✓
  ├── Authentication System          ✓
  │
  ▼
Next
  │
  ├── Real-time WebSocket Layer      ☐
  ├── Motion Anomaly Detection       ☐
  │
  ▼
Layer 2
  │
  ├── Motion Sensor Anomalies        ☐
  ├── Microphone Anomalies           ☐
  │
  ▼
Layer 3
  │
  ├── GPS Tracking                   ☐
  ├── Speed Dip Detection            ☐
  ├── Stationary-State Detection     ☐
  │
  ▼
Final Integration
  │
  ├── Multi-layer Validation         ☐
  ├── Emergency Contact System       ☐
  ├── Emergency Services Integration ☐
  └── Real-time React Dashboard      ☐
```

AEGIS is being developed incrementally, with the current focus on establishing the **ML and backend foundation** before integrating real-time sensor streams and the remaining detection layers.

---

## Contributing

AEGIS is an ongoing project, and contributions are welcome.

If you would like to contribute:

1. **Fork** the repository.
2. Create a new branch for your changes.
3. Make your improvements or additions.
4. Submit a **Pull Request** with a clear description of your changes.

Whether it is improving anomaly detection, adding new detection layers, working on the backend, frontend, real-time communication, or fixing bugs, every contribution is appreciated.

## Thanks

Thank you to everyone who takes the time to explore, test, contribute to, or provide feedback on AEGIS.

Your contributions help make the project better.
