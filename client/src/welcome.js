import './App.css';
import React from 'react';
import bg from './assets/welcome_bg.jpg';
function Welcome() {

  return (
        <div class="view p-3 mb-2" style={{ 
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center"}}>
        <div class="mask rgba-black-light align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mb-4 white-text text-center">
                <h1 class="h1-reponsive text-warning white-text font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>PetLand</strong></h1>
                <h3 class="mb-4 white-text wow fadeInDown" data-wow-delay="0.4s">A web platform where animal lovers and pets meet!</h3>
                <a href="/login" class="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">LOGIN</a>
                <a href="/register" class="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">REGISTER</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Welcome;
