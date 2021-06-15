import firebase from 'firebase/app';
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('345dh345er23').collection('cart-item').doc('236424h2g436723')
// ✌ the same as this  document
firestore.doc('/users/345dh345er23/cart-item/236424h2g436723')
// ✌ the same as this  collections
firestore.collection('/users/345dh345er23/cart-item')