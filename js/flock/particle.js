// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 25500.0;
  this.species = obj.species;

  this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(f) {
    this.acceleration.add(f);
  };


  // Method to update position
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  // Method to display
  this.display = function() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };

  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
};
