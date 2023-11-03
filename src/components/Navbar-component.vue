<template>
    <nav class="navbar navbar-expand-lg bg-body tertiary justify-content-between" style="background: linear-gradient(-90deg, #84cf6a, #16c0b0);">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img style="max-width: 70%; height: auto;" src="../assets/icons/vuejs.svg" alt="Vue Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/about">About</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/contact">Contact</router-link>
            </li>
          </ul>

          <ul class="d-flex navbar-nav mb-lg-0">
            <li class="nav-item">
              <router-link to="/cart">
                <button class="btn btn-dark">Shopping Cart</button>
              </router-link>        
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
</template>

