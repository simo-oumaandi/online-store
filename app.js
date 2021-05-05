const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.listen(8080, _ => console.log('Server Started'))
