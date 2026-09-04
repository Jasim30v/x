// 💖 MNAENCA 2026 - Pink Rose Gold Luxury Configuration
// Firebase: bomk-9f6ec | Cloudinary: lkqbt5yq
// ✨ PREMIUM: TikTok Comments + Share System + Voice Messages + Enhanced Profile + Posts

const firebaseConfig = {
    apiKey: "AIzaSyAAiH5kBtNBfuRbXddoCuLet9IGMG2U7q0",
    authDomain: "bomk-9f6ec.firebaseapp.com",
    databaseURL: "https://bomk-9f6ec-default-rtdb.firebaseio.com",
    projectId: "bomk-9f6ec",
    storageBucket: "bomk-9f6ec.firebasestorage.app",
    messagingSenderId: "743058000945",
    appId: "1:743058000945:web:a862e1eecf7d3d98925910",
    measurementId: "G-7F4W2H5Z3Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "lkqbt5yq";
const UPLOAD_PRESET = "yg55_gk";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;
const CLOUDINARY_RAW_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`;

// 💖 MNAENCA Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #831843, #be185d, #ec4899)",
    "linear-gradient(135deg, #9d174d, #db2777, #f472b6)",
    "linear-gradient(135deg, #4a0e2b, #be185d, #f9a8d4)",
    "linear-gradient(135deg, #831843, #ec4899, #fbcfe8)",
    "linear-gradient(135deg, #701a3d, #db2777, #fda4af)",
    "linear-gradient(135deg, #0f172a, #831843, #be185d)"
];

// 💖 App Info
const APP_NAME = "MNAENCA";
const APP_VERSION = "2026.5";
const PRIMARY_COLOR = "#ec4899";
const SECONDARY_COLOR = "#fbcfe8";

console.log('💖 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #ec4899; font-size: 16px; font-weight: bold;');
