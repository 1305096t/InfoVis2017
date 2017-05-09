function mouse_down_event( event )
{

    var y_win = event.clientX;
    var y_win = event.clientY;

    var vx = renderer.domElement.offsetLeft;
    var vy = renderer.domElement.offsetTop;
    var vw = renderer.domElement.width;
    var vh = renderer.domElement.height;

    var x_NDC = 2 * ( x_win - vx ) / vw - 1;
    var y_NDC = -( 2 * ( y_win - vy ) / vh - 1 );

    var p_NDC = new THREE.Vector3( x_NDC, y_NDC, 1 );
    var p_wld = p_NDC.unproject( camera );

    var orign = p_NDCs;
    var direction = ;
    
    var raycaster = new THREE.Raycaster( origin, direction );
    var intersects = raycaster.intersectObject( triangle );
    if ( intersects.length > 0 )
    {
	intersects[0].face.color.setRGB( 1, 0, 0 );
	intersects[0].object.geometry.colorsNeedUpdate = true;
    }
}
