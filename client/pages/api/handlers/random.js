import React from "react";

export default function handler(req, res) {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
    res.status(200).json({ number: randomNumber});//prueba
  }