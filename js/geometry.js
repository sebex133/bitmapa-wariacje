function doRotation90Axy( ) {
    doClear( );

    for ( let xe = 0; xe < myWidth; xe++ ) {   // ( xe, ye ) -> ( 255 - ye, xe )
        for ( let ye = 0; ye < myHeight; ye++ ) {
            var pixel = myContext1.getImageData( xe, ye, 1, 1 );
            var DataIN = pixel.data;
            var r = DataIN[ 0 ];
            var g = DataIN[ 1 ];
            var b = DataIN[ 2 ];
            myContext2.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + " )";
            myContext2.fillRect( 255 - ye, xe, 1, 1 );
        }
    }
}
//---------------------------------------------------------------------------------------------------------------

function doRotation90AImageData() {
    doClear( );
    var myImageDataIN = myContext1.getImageData( 0, 0, myWidth, myHeight );
    var myImageDataOUT = myContext1.getImageData( 0, 0, myWidth, myHeight );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let i = 0; i < myDataIN.length; i += 4 ) {
        var xe = Math.floor( i / 4 ) % myWidth;
        var ye = Math.floor( Math.floor( i / 4 ) / myWidth );
        var desc = myWidth * xe + 255 - ye; // ( xe, ye ) -> ( 255 - ye, xe )
        myDataOUT[ desc * 4 ] = myDataIN[ i ];
        myDataOUT[ desc * 4 + 1 ] = myDataIN[ i + 1 ];
        myDataOUT[ desc * 4 + 2 ] = myDataIN[ i + 2 ];
        myDataOUT[ desc * 4 + 3 ] = myDataIN[ i + 3 ];
    }
    myContext2.putImageData( myImageDataOUT, 0, 0 );
}
//---------------------------------------------------------------------------------------------------------------

function doRotationsK90( ) {
    doClear( );
    //...
}
//----------------------------------------------------------------------------

function doRotationsThetaVer1( ) {
    doClear( );
    rotationsThetaVer1( myCanvas1, myCanvas2, 15 );
    rotationsThetaVer1( myCanvas1, myCanvas3, 30 );
    rotationsThetaVer1( myCanvas1, myCanvas4, 45 );
    rotationsThetaVer1( myCanvas1, myCanvas5, 60 );
    rotationsThetaVer1( myCanvas1, myCanvas6, 75 );
}
//----------------------------------------------------------------------------

function doRotationsThetaVer2( ) {
    doClear( );
    rotationsThetaVer1( myCanvas1, myCanvas2, 15 );
    rotationsThetaVer1( myCanvas2, myCanvas3, 15 );
    rotationsThetaVer1( myCanvas3, myCanvas4, 15 );
    rotationsThetaVer1( myCanvas4, myCanvas5, 15 );
    rotationsThetaVer1( myCanvas5, myCanvas6, 15 );
}

function rotationsThetaVer1( myCanvasIN, myCanvasOUT, Theta, xs = myWidth / 2, ys = myHeight / 2 ) {
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;
    var x1, y1;
    var cost = Math.cos( Theta * Math.PI / 180.0 );
    var sint = Math.sin( Theta * Math.PI / 180.0 );
    for ( let i = 0; i < myDataIN.length; i += 4 ) {
        var xe = Math.floor( i / 4 ) % myWidth;
        var ye = Math.floor( Math.floor( i / 4 ) / myWidth );
        x1 = xs + Math.floor( ( xe - xs ) * cost + ( ye - ys ) * sint + 0.5 );
        y1 = ys + Math.floor( -( xe - xs ) * sint + ( ye - ys ) * cost + 0.5 );
        if ( ( x1 >= 0 ) && ( x1 < myWidth ) && ( y1 >= 0 ) && ( y1 < myHeight ) ) {
            var j = ( myWidth * y1 + x1 ) * 4;
            myDataOUT[ i ] = myDataIN[ j ];
            myDataOUT[ i + 1 ] = myDataIN[ j + 1 ];
            myDataOUT[ i + 2 ] = myDataIN[ j + 2 ];
            myDataOUT[ i + 3 ] = myDataIN[ j + 3 ];
        } else {
            myDataOUT[ i ] = 0xCC;
            myDataOUT[ i + 1 ] = 0xCCC;
            myDataOUT[ i + 2 ] = 0xCCC;
            myDataOUT[ i + 3 ] = 255;
        }
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}
//----------------------------------------------------------------------------

function doRotationsThetaVer3( ) {
    doClear( );
    rotationsThetaVer2( myCanvas1, myCanvas2, 15 );
    rotationsThetaVer2( myCanvas1, myCanvas3, 30 );
    rotationsThetaVer2( myCanvas1, myCanvas4, 45 );
    rotationsThetaVer2( myCanvas1, myCanvas5, 60 );
    rotationsThetaVer2( myCanvas1, myCanvas6, 75 );
}
//----------------------------------------------------------------------------

function rotationsThetaVer2( myCanvasIN, myCanvasOUT, Theta ) {
    //...
}
//----------------------------------------------------------------------------

function doRotationsThetaVer4( ) {
    doClear( );
    rotationsThetaVer1( myCanvas1, myCanvas2, 15, 0, 0 );
    rotationsThetaVer1( myCanvas1, myCanvas3, 15, 255, 0 );
    rotationsThetaVer1( myCanvas1, myCanvas4, 15, 128, 128 );
    rotationsThetaVer1( myCanvas1, myCanvas5, 15, 255, 255 );
    rotationsThetaVer1( myCanvas1, myCanvas6, 15, 0, 255 );
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function doReflectionsVer1( ) {
    doClear( );
    reflectionVertical( myCanvas1, myCanvas2 );
    reflectionVerticalHorizontal( myCanvas1, myCanvas3 );
    reflectionHorizontal( myCanvas1, myCanvas4 );
    reflectionDiagonal1( myCanvas1, myCanvas5 );
    reflectionDiagonal2( myCanvas1, myCanvas6 );
}
//----------------------------------------------------------------------------

function reflectionVertical( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function reflectionHorizontal( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function reflectionVerticalHorizontal( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function reflectionDiagonal1( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function reflectionDiagonal2( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function doReflectionsVer2( ) {
    doClear( );
    reflectionVertical( myCanvas1, myCanvas2 );
    reflectionVertical( myCanvas2, myCanvas3 );
    reflectionHorizontal( myCanvas1, myCanvas4 );
    reflectionVertical( myCanvas4, myCanvas5 );
    reflectionVertical( myCanvas5, myCanvas6 );
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function doPixelShiftVer1( ) {
    doClear( );
    shiftXY( myCanvas1, myCanvas2 );
    shiftY( myCanvas1, myCanvas3 );
    shiftX( myCanvas1, myCanvas4 );
    shiftXX( myCanvas1, myCanvas5 );
    shiftY( myCanvas1, myCanvas6 );
}
//----------------------------------------------------------------------------

function shiftXX( myCanvasIN, myCanvasOUT, deltaX = myWidth / 2 ) {
    //...
}
//----------------------------------------------------------------------------

function shiftX( myCanvasIN, myCanvasOUT, deltaX = myWidth / 2 ) {
    //...
}
//----------------------------------------------------------------------------

function shiftY( myCanvasIN, myCanvasOUT, deltaY = myHeight / 2 ) {
    //...
}
//----------------------------------------------------------------------------

function shiftXY( myCanvasIN, myCanvasOUT, deltaX = myWidth / 2, deltaY = myHeight / 2 ) {
    //...
}
//----------------------------------------------------------------------------

function doPixelShiftVer2( ) {
    doClear( );
    var deltaX = Math.floor( Math.random() * myWidth), deltaY = Math.floor( Math.random() * myHeight );
    shiftXY( myCanvas1, myCanvas2, deltaX, deltaY );
    shiftY( myCanvas1, myCanvas3, deltaX, deltaY );
    shiftX( myCanvas1, myCanvas4, deltaX, deltaY );
    shiftXX( myCanvas1, myCanvas5, deltaX, deltaY );
    shiftY( myCanvas1, myCanvas6, deltaX, deltaY );
}
//----------------------------------------------------------------------------

function doPixelShiftVer3( ) {
    doClear( );
    var deltaX = Math.floor( Math.random() * myWidth), deltaY = Math.floor( Math.random() * myHeight );
    shiftXY( myCanvas1, myCanvas2, deltaX, deltaY );
    shiftXY( myCanvas1, myCanvas3, deltaX, deltaY );
    shiftXY( myCanvas1, myCanvas4, deltaX, deltaY );
    shiftXY( myCanvas1, myCanvas5, deltaX, deltaY );
    shiftXY( myCanvas1, myCanvas6, deltaX, deltaY );
}
//----------------------------------------------------------------------------

function doBitmapMagnificationVer1( ) {
    doClear( );
    bitmapMagnificationFirstQuarter( myCanvas1, myCanvas2 );
    bitmapMagnificationFirstQuarter( myCanvas2, myCanvas3 );
    bitmapMagnificationFirstQuarter( myCanvas3, myCanvas4 );
    bitmapMagnificationFirstQuarter( myCanvas4, myCanvas5 );
    bitmapMagnificationFirstQuarter( myCanvas5, myCanvas6 );
}
//----------------------------------------------------------------------------

function doBitmapMagnificationVer2( ) {
    doClear( );
    bitmapMagnificationFirstQuarter( myCanvas1, myCanvas2 );
    bitmapMagnificationSecondQuarter( myCanvas1, myCanvas3 );
    bitmapMagnificationImageCenter( myCanvas1, myCanvas4 );
    bitmapMagnificationThirdQuarter( myCanvas1, myCanvas5 );
    bitmapMagnificationFourthQuarter( myCanvas1, myCanvas6 );
}
//----------------------------------------------------------------------------

function doBitmapMagnificationVer3( ) {
    doClear( );
    bitmapMagnificationImageCenter( myCanvas1, myCanvas2 );
    bitmapMagnificationImageCenter( myCanvas2, myCanvas3 );
    bitmapMagnificationImageCenter( myCanvas3, myCanvas4 );
    bitmapMagnificationImageCenter( myCanvas4, myCanvas5 );
    bitmapMagnificationImageCenter( myCanvas5, myCanvas6 );
}
//----------------------------------------------------------------------------

function bitmapMagnificationFirstQuarter( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapMagnificationSecondQuarter( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapMagnificationThirdQuarter( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapMagnificationFourthQuarter( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapMagnificationImageCenter( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function doBitmapReductionVer1( ) {
    doClear( );
    bitmapReductionEvenEven( myCanvas1, myCanvas2 );
    bitmapReductionEvenEven( myCanvas2, myCanvas3 );
    bitmapReductionEvenEven( myCanvas3, myCanvas4 );
    bitmapReductionEvenEven( myCanvas4, myCanvas5 );
    bitmapReductionEvenEven( myCanvas5, myCanvas6 );
}
//----------------------------------------------------------------------------

function doBitmapReductionVer2( ) {
    doClear( );
    bitmapReductionEvenEven( myCanvas1, myCanvas2 );
    bitmapReductionOddEven( myCanvas1, myCanvas3 );
    bitmapReductionAllPixels( myCanvas1, myCanvas4 );
    bitmapReductionEvenOdd( myCanvas1, myCanvas5 );
    bitmapReductionOddOdd( myCanvas1, myCanvas6 );
}
//----------------------------------------------------------------------------

function doBitmapReductionVer3( ) {
    doClear( );
    bitmapReductionAllPixels( myCanvas1, myCanvas2 );
    bitmapReductionAllPixels( myCanvas2, myCanvas3 );
    bitmapReductionAllPixels( myCanvas3, myCanvas4 );
    bitmapReductionAllPixels( myCanvas4, myCanvas5 );
    bitmapReductionAllPixels( myCanvas5, myCanvas6 );
}
//----------------------------------------------------------------------------

function bitmapReductionEvenEven( myCanvasIN, myCanvasOUT ) {
    // ...
}
//----------------------------------------------------------------------------

function bitmapReductionOddEven( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapReductionEvenOdd( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapReductionOddOdd( myCanvasIN, myCanvasOUT ) {
    //...
}
//----------------------------------------------------------------------------

function bitmapReductionAllPixels( myCanvasIN, myCanvasOUT ) {
    //..
}
//----------------------------------------------------------------------------

function doRandomDistribution( ) {
    doClear( );
    bitmapRandomDistribution( myCanvas1, myCanvas2, 2 );
    bitmapRandomDistribution( myCanvas1, myCanvas3, 4 );
    bitmapRandomDistribution( myCanvas1, myCanvas4, 8 );
    bitmapRandomDistribution( myCanvas1, myCanvas5, 16 );
    bitmapRandomDistribution( myCanvas1, myCanvas6, 32 );
}
//----------------------------------------------------------------------------

function bitmapRandomDistribution( myCanvasIN, myCanvasOUT, parameter ) {
    //...
}


function powerRedProcess( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let j = 0; j < myDataIN.length; j += 4 ) {
        myDataOUT[j] = 255; //red
        myDataOUT[j + 1] = myDataIN[j + 1]; //green
        myDataOUT[j + 2] = myDataIN[j + 2]; //blue
        myDataOUT[j + 3] = myDataIN[j + 3]; //alpha
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}

function powerGreenProcess( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let j = 0; j < myDataIN.length; j += 4 ) {
        myDataOUT[j] = myDataIN[j]; //red
        myDataOUT[j + 1] = 255; //green
        myDataOUT[j + 2] = myDataIN[j + 2]; //blue
        myDataOUT[j + 3] = myDataIN[j + 3]; //alpha
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}

function powerBlueProcess( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let j = 0; j < myDataIN.length; j += 4 ) {
        myDataOUT[j] = myDataIN[j]; //red
        myDataOUT[j + 1] = myDataIN[j+1]; //green
        myDataOUT[j + 2] = 255; //blue
        myDataOUT[j + 3] = myDataIN[j + 3]; //alpha
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}

function sketch( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let j = 0; j < myDataIN.length; j += 4 ) {
        if(myDataIN[j] < 200 && myDataIN[j+1] < 200 && myDataIN[j+2] < 200){
            myDataOUT[j] = myDataIN[j]; //red
            myDataOUT[j + 1] = myDataIN[j+1]; //green
            myDataOUT[j + 2] = myDataIN[j+2]; //blue
            myDataOUT[j + 3] = myDataIN[j + 3]; //alpha
        }else{
            myDataOUT[j] = 255; //red
            myDataOUT[j + 1] = 255; //green
            myDataOUT[j + 2] = 255; //blue
            myDataOUT[j + 3] = 1; //alpha
        }
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}

function pushDown( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    //pierwsza polowka
    for ( let j = 0; j < myDataIN.length / 2; j += 4 ) {
        myDataOUT[j] = myDataIN[j + myDataIN.length / 2]; //red
        myDataOUT[j + 1] = myDataIN[j + myDataIN.length / 2 + 1]; //green
        myDataOUT[j + 2] = myDataIN[j + myDataIN.length / 2 + 2]; //blue
        myDataOUT[j + 3] = myDataIN[j + myDataIN.length / 2 + 3]; //alpha
    }

    //druga polowka
    for ( let j = myDataIN.length / 2; j < myDataIN.length; j += 4 ) {
        myDataOUT[j] = myDataIN[j - myDataIN.length / 2]; //red
        myDataOUT[j + 1] = myDataIN[j - myDataIN.length / 2 + 1]; //green
        myDataOUT[j + 2] = myDataIN[j - myDataIN.length / 2 + 2]; //blue
        myDataOUT[j + 3] = myDataIN[j - myDataIN.length / 2 + 3]; //alpha
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}
function halfCut( myCanvasIN, myCanvasOUT ){
    var myContextIN = myCanvasIN.getContext( '2d' );
    var myContextOUT = myCanvasOUT.getContext( '2d' );
    var myImageDataIN = myContextIN.getImageData( 0, 0, myWidth, myCanvasOUT.height );
    var myImageDataOUT = myContextOUT.getImageData( 0, 0, myWidth, myCanvasOUT.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let j = 0; j < myDataIN.length; j += 4 ) {
        if(Math.floor(j / (myWidth*2)) % 2 == 0){
            myDataOUT[j] = myDataIN[j]; //red
            myDataOUT[j + 1] = myDataIN[j + 1]; //green
            myDataOUT[j + 2] = myDataIN[j + 2]; //blue
            myDataOUT[j + 3] = myDataIN[j + 3]; //alpha
        }else{
            myDataOUT[j] = 255; //red
            myDataOUT[j + 1] = 255; //green
            myDataOUT[j + 2] = 255; //blue
            myDataOUT[j + 3] = 1; //alpha
        }
    }
    myContextOUT.putImageData( myImageDataOUT, 0, 0 );
}

function wariacje(){
    pushDown(myCanvas1, myCanvas2);
    // powerRedProcess(myCanvas1, myCanvas3);
    halfCut(myCanvas1, myCanvas3);
    powerGreenProcess(myCanvas1, myCanvas4);
    powerBlueProcess(myCanvas1, myCanvas5);
    sketch(myCanvas1, myCanvas6);
}
