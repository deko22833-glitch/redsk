// Конфигурация Firebase
// ИНСТРУКЦИЯ: Замените эти значения на ваши данные из Firebase Console
// 1. Перейдите на https://console.firebase.google.com/
// 2. Создайте новый проект или выберите существующий
// 3. В настройках проекта найдите "Ваши приложения" → "Web"
// 4. Скопируйте конфигурацию и вставьте ниже

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Инициализация Firebase
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    window.firebaseReady = true;
} else {
    console.warn('Firebase не настроен. Используется локальное хранилище.');
    window.firebaseReady = false;
}

