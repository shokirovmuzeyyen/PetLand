const db = require('../db')
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')
const { json } = require('express')

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query('select user_id, name, email, phone, address from users')

    return res.status(200).json({
      success: true,
      users: rows,
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { name, email, password, phone, address } = req.body
  try {
    const hashedPassword = await hash(password, 10)
    await db.query('insert into users(name,email,password,phone,address) values ($1,$2,$3,$4,$5)', [
      name,
      email,
      hashedPassword, // hashedPassword
      phone,
      address,
    ])

    return res.status(201).json({
      success: true,
      message: 'The registration was successful.',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.user_id,
    email: user.email,
  }

  try {
    const token = sign(payload, SECRET);
    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in successfully. HI',
      token: `${user.user_id}`,
    }) 
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully.',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}


/* Create Post add to the db */

exports.createPost = async (req, res) => {
  const { name, breed, age, location, p_image, extra_info, vaccinated, ts } = req.body
  try {
    await db.query('insert into post(name, breed, location, p_image, extra_info, vaccinated, ts, age, user_id ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);', 
    [name, breed, location, p_image, extra_info, vaccinated, ts, age, 29])
    return res.status(201).json({
      success: true,
      message: 'The post creation was successful.',
    })
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getPosts = async (req, res) => {
  try {
    const { rows } = await db.query('select p_image, name, location, user_id, extra_info, ts, vaccinated, breed, age from post;')
    console.log("No error in server.")

    return res.status(200).json({
      success: true,
      message: "well done",
      posts: rows
    })
  } catch (error) {
    console.log("Yes error in server.")
    console.log(error.message)
    return json({success:false, message:"error occured in server"})
  }
}

exports.search = async (req, res) => {
  console.log(req.body)
  const { search_name, search_breed, search_location } = req.body
  console.log(search_breed)
  try {
    const { rows } = await db.query(`select * from post where breed like $1 and location like $2 and name like $3;`, [search_breed, search_location, search_name])
    console.log(rows)
    console.log("Query terminated.")
    return res.status(200).json({
      success: true,
      posts: rows
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })

  }
}