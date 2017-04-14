// constructor
vec3 = function(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
}

// add method
vec3.prototype.add = function(v){
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
  return this;
}

// sum method
vec3.prototype.sum = function(){
  return this.x + this.y + this.z;
}


///w02-task1
// min method
vec3.prototype.min = function(){
  if(this.x <= this.y && this.x <= this.z)
    return this.x;
  else if(this.y <= this.z && this.y <= this.x)
    return this.y;
  else if(this.z <= this.x && this.z <= this.y)
    return this.z;
}

// mid method
vec3.prototype.mid = function(){
  if((this.z < this.x && this.x < this.y) || (this.y < this.x && this.x < this.z))
    return this.x;
  else if((this.x < this.y && this.y < this.z) || (this.z < this.y && this.y < this.x))
    return this.y;
  else if((this.y < this.z && this.z < this.x) || (this.x < this.z && this.z < this.y))
    return this.z;
}

// max method
vec3.prototype.max = function(){
  if(this.y <= this.x && this.z <= this.x)
    return this.x;
  else if(this.z <= this.y && this.x <= this.y)
    return this.y;
  else if(this.x <= this.z && this.y <= this.z)
    return this.z;
}