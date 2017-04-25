var vertices = [
    [-1, 1, 0], // v0
    [-1,-1, 0], // v1
    [ 1,-1, 0]  // v2
];

var faces = [
    [0,1,2] // f0: v0-v1-v2
];

var v0 = new THREE.Vector3().fromArray( vertices[0] );
var v1 = new THREE.Vector3().fromArray( vertices[1] );
var v2 = new THREE.Vector3().fromArray( vertices[2] );
var id = faces[0];
var f0 = new THREE.Face( id[0], id[1], id[2] );

var geometry = new THREE.Geomertry();
geometry.vertices.push( v0 );
geometry.vertices.push( v1 );
geometry.vertices.push( v2 );
geometry.faces.push( f0 );

var material = new THREE.MeshBasicMaterial();
material.vertexColors = THREE.FaceColors;
geometry.faces[0].color = new THREE.Color( 1, 0, 0 );

var material = new THREE.MeshBasicMaterial();

material.vertexColors = THREE.VertexColors;
geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));
