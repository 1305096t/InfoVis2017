function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 7 );
    scene.add( camera );
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
   
    var vertices = [
	[-1, 1, 0], // v0
	[-1,-1, 0], // v1
	[ 1,-1, 0], // v2
	[ 1, 1, 0], // v3
	[-1, 1, 2], // v4
	[-1,-1, 2], // v5
	[ 1,-1, 2], // v6
	[ 1, 1, 2]  // v7
    ];

    var faces = [
	[0,1,2], // f 0: v0-v1-v2
	[0,2,3], // f 1: v0-v2-v3
	[2,6,3], // f 2: v2-v6-v3
	[3,6,7], // f 3: v3-v6-v7
	[6,5,7], // f 4: v6-v5-v7
	[5,4,7], // f 5: v5-v4-v7
	[1,4,5], // f 6: v1-v4-v5
	[1,0,4], // f 7: v1-v0-v4
	[0,3,7], // f 8: v0-v3-v7
	[0,7,4], // f 9: v0-v7-v4
	[1,2,5], // f10: v1-v2-v5
	[2,6,5]  // f11: v2-v6-v5
    ];

    var geometry = new THREE.Geometry();
    var i;
    for(i=0; i<8; i++){
	geometry.vertices.push(new THREE.Vector3().fromArray(vertices[i]));
    }
    
    //var material = new THREE.MeshBasicMaterial();
    /*
      var material = new THREE.MeshLambertMaterial({
	color: 0xffffff
    });
    */
    var material = new THREE.MeshLambertMaterial();
    for(i=0; i<12; i++){
	geometry.faces.push(new THREE.Face3(faces[i][0], faces[i][1], faces[i][2]));
	//material.vertexColors = THREE.FaceColors;
	//geometry.faces[i].color = new THREE.Color( 1/i, 1-1/i, 1/2+1/(2*i) );
    }
    geometry.computeFaceNormals();
    

    material.vertexColors = THREE.VertexColors;
    geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));
    material.side = THREE.DoubleSide;
    
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 2, 1, 4 );
    scene.add( light );
    var pointLightHelper = new THREE.PointLightHelper( light, 1);//(光源,ヘルパーオブジェクトの大きさ)
    scene.add( pointLightHelper);
    
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
