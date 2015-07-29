function Point( x, y )
{
	if ( x instanceof Point ) {
		this.X = x.X;
		this.Y = x.Y;
	} else {
		this.X = x;
		this.Y = y;
	}
	this.Add = function (ap) { this.X += ap.X; this.Y += ap.Y; return this; };
	this.Sub = function (ap) { this.X -= ap.X; this.Y -= ap.Y; return this; };
	this.Shift = function( x, y ) { this.X += x; this.Y += y; return this; };
}

function Cross2Circles( c1, r1, c2, r2 )
{
  var d = Math.sqrt((c2.X-c1.X)*(c2.X-c1.X)+(c2.Y-c1.Y)*(c2.Y-c1.Y));
  var l = ( r1*r1 - r2*r2 + d*d ) / (d+d);
  var h = Math.sqrt( r1*r1 - l*l );
  
  return [ new Point( ( l / d ) * (c2.X-c1.X) + ( h / d ) * (c2.Y-c1.Y) + c1.X, ( l / d ) * (c2.Y-c1.Y) - ( h / d ) * (c2.X-c1.X) + c1.Y ),
           new Point( ( l / d ) * (c2.X-c1.X) - ( h / d ) * (c2.Y-c1.Y) + c1.X, ( l / d ) * (c2.Y-c1.Y) + ( h / d ) * (c2.X-c1.X) + c1.Y )
         ];
}

function Vector( c, p )
{
	this.center = c;
	this.p = p;
	this.dx = p.X - c.X;
  this.dy = p.Y - c.Y;
	this.distance = Math.sqrt( this.dx*this.dx+this.dy*this.dy );
  var a = Math.atan( this.dy/this.dx ) * 180 / Math.PI;
  if( this.dx < 0 )
    if( this.dy < 0 )
      a += 180;
    else
      a += 180;
  else
     if( this.dy < 0 )
       a += 360;
  this.angle = a;
	this.dx /= this.distance;
  this.dy /= this.distance;
  this.arcRadius = 20;
  this.AwayFrom1 = function( d ) { // Calculate a point in the line  with a distance from center point
    return new Point( this.center.X+this.dx*d, this.center.Y+this.dy*d);
  }
  this.sign = function (p) { // Calculate the side value for a point to decide the side of the point 
    return p.Y - this.center.Y - (p.X-this.center.X)*this.dy/this.dx;
  }
  this.testdraw1 = function () {
    var cc = document.createElementNS( svgNS, 'circle' );
    cc.setAttribute( 'class', 'circletest' );
    cc.setAttribute( 'cx', this.center.X );
    cc.setAttribute( 'cy', this.center.Y );
    cc.setAttribute( 'r', this.arcRadius );
    svg.appendChild( cc );
  }
//  this.testdraw1();
}

// An edge is specified by 2 vectors
function Edge( v1, v2 )
{
  Vector.call( this, v1.p, v2.p );
  this.v1 = v1;
  this.v2 = v2;
  this.centerSign = this.sign( v1.center );
  var remain = this.distance - v1.arcRadius - v2.arcRadius;
  this.connectArcRadius = remain; // make v1.arcRadius+connectArcRadius + v2.arcRadius+connectArcRadius > distance
  if( this.connectArcRadius <= 0 ) { // if too close
    this.connectArcRadius = 5;
  }
  var cross = Cross2Circles( v1.p, v1.arcRadius+this.connectArcRadius, v2.p, v2.arcRadius+this.connectArcRadius );
  var side = 0;
  // want to choose the cross point that is on the opposite side of the line v1-v2 with the center point 
  var signC = this.sign( cross[side] );
  if( this.centerSign > 0 && signC > 0 || this.centerSign < 0 && signC < 0 ) {
    side = 1;
    signC = this.sign( cross[side] );
  }
  // figure out the tangent point between the connecting circle and the point circle
  this.arcCenter = cross[side];
  var centerline = new Vector( this.arcCenter, v1.p );
  this.arcStart = centerline.AwayFrom1( this.connectArcRadius );
  var a = centerline.angle;
  centerline = new Vector( this.arcCenter, v2.p );
  this.arcEnd = centerline.AwayFrom1( this.connectArcRadius );
  a -= centerline.angle; // to calculate the arc angle, we need to turn clock-wise from p2 to p1, but the drawing will be counter-clockwise
  if( a < 0 ) a += 360;
  this.largeArc = ( a > 180 ? 1 : 0 );
}

function Polygon()
{ // https://en.wikipedia.org/wiki/Centroid
  var vec = [];
  for (var i = 0; i < arguments.length; i++) {
      if( arguments[i] instanceof Point ) {
        vec.push( arguments[i] );
      }
  }
  var x = 0.0;
  var y = 0.0;
  for (var i = 0; i < vec.length; i++) {
    x += vec[i].X;
    y += vec[i].Y;
  }
  this.center = new Point( x/vec.length, y/vec.length );

  this.order = [];
  this.vector = [];
  for (var i = 0; i < vec.length; i++) {
     var p = vec[i];
     var v = new Vector( this.center, p );
     this.order.push(i);
     this.vector.push(v);
  }
  
  // figure out the order of vertices by the angle
  for (var i = 0; i < this.order.length-1; i++) {
    var minAngle = this.vector[this.order[i]].angle;
    for (var j = i+1; j < this.order.length; j++) {
      if( this.vector[this.order[j]].angle < minAngle ) {
        minAngle = this.vector[this.order[j]].angle;
        var minId = this.order[j];
        this.order[j] = this.order[i];
        this.order[i] = minId;
      }
    }
  }   

  // create edges
  this.edge = [];
  for (var i = 0; i < this.order.length; i++) {
    var j = i + 1;
    if( j==this.order.length ) j = 0;
    this.edge.push( new Edge( this.vector[this.order[i]], this.vector[this.order[j]] ) );
  }
  
  // other calculation not used
  this.area = function () {
    if( this.v.length<=0 ) return 0;
    var a = 0.0;
    for (var i = 0; i < this.v.length; i++) {
      var ip1 = i + 1;
      if( ip1==this.v.length ) ip1 = 0;
      a += this.v[i].X * this.v[ip1].Y - this.v[ip1].X * this.v[i].Y;
    }
    return a / 2;
  }
  this.cx = function () {
    var A = this.area();
    if( A==0 ) return 0;
    var c = 0.0;
    for (var i = 0; i < this.v.length; i++) {
      var ip1 = i + 1;
      if( ip1==this.v.length ) ip1 = 0;
      c += (this.v[i].X+this.v[ip1].X)*( this.v[i].X*this.v[ip1].Y - this.v[ip1].X * this.v[i].Y );
    }
    return c / (6*A);
  }
  this.cy = function () {
    var A = this.area();
    if( A==0 ) return 0;
    var c = 0;
    for (var i = 0; i < this.v.length; i++) {
      var ip1 = i + 1;
      if( ip1==this.v.length ) ip1 = 0;
      c += (this.v[i].Y+this.v[ip1].Y)*( this.v[i].X*this.v[ip1].Y - this.v[ip1].X * this.v[i].Y );
    }
    return c / (6*A);
  }
  
  this.SetSubjects = function () {
    this.subject = [];
    for (var i = 0; i < arguments.length; i++) {
        this.subject.push( arguments[i] );
    }    
  }

  // Drawing
  this.draw1 = function ( g ) {
    var parent = svg;
    if( g ) {
      parent = document.getElementById( g );
    }
    // <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
    var pol = document.createElementNS( svgNS, 'polygon' );
    var points = '';
    for (var i = 0; i < this.order.length; i++) {
      var v = this.vector[this.order[i]]
      var pt = v.p;
      points += pt.X + ',' + pt.Y + ' ';
      // If there is no subject defined, 
      // label each vertex with the order number of the vertices when they are provided
      // It's not the order they are drawn.
      var label = document.createElementNS( svgNS, 'text' );
      label.setAttribute( "class", "vertexlabel");
      var labelPos = v.AwayFrom1( v.distance + 5 ); // outside 5
		  label.setAttribute( "x", labelPos.X );
		  label.setAttribute( "y", labelPos.Y );
		  var tn = document.createTextNode(this.order[i]);
  		label.appendChild(tn);
		  parent.appendChild( label );

      var cc = document.createElementNS( svgNS, 'circle' );
      cc.setAttribute( 'class', 'vertex' );
      cc.setAttribute( 'cx', pt.X );
      cc.setAttribute( 'cy', pt.Y );
      parent.appendChild( cc );       

      if( i==0 ) { // mark the starting point
        labelPos = v.AwayFrom1( v.distance - 5 ); // inside 5
        cc = document.createElementNS( svgNS, 'circle' );
        cc.setAttribute( 'class', 'startpoint' );
        cc.setAttribute( 'cx', labelPos.X );
        cc.setAttribute( 'cy', labelPos.Y );
        parent.appendChild( cc );       
      }      
    }
    
    pol.setAttribute( 'points', points );
 		pol.setAttribute( "style", "fill:none;stroke:purple;stroke-width:1");
    parent.appendChild( pol );

/*    
    var cc = document.createElementNS( svgNS, 'circle' );
    cc.setAttribute( 'class', 'point' );
    cc.setAttribute( 'cx', this.cx() );
    cc.setAttribute( 'cy', this.cy() );
    svg.appendChild( cc );
  */  

    cc = document.createElementNS( svgNS, 'circle' );
    cc.setAttribute( 'class', 'center' );
    cc.setAttribute( 'cx', this.center.X );
    cc.setAttribute( 'cy', this.center.Y );
    parent.appendChild( cc );
    
  }
  
  this.DrawEdge = function () {
    
  } 
  
  this.Draw = function ( g ) {
    this.parent = svg;
    if( g ) {
      this.parent = document.getElementById( g );
    }
    /* each subject should show only once, so it should not be shown here.
    if( this.subject ) {
      for (var i = 0; i < this.order.length; i++) {
        var s = this.subject[this.order[i]];
        var v = this.vector[this.order[i]];
        s.Draw( parent, v.p );
      }
    }
    */
    
    for( i=0; i < this.edge.length; i++ ) {
      var e = this.edge[i];
      if( e.connectArcRadius ) {
        // the connecting arc from p1 to p2
        var pathD = "M"+e.arcStart.X+","+e.arcStart.Y+" "; //    <path d="M40,20 A10,10 0 0,1 38,25" style="fill:none;stroke:lightblue" />
        pathD += "A"+ e.connectArcRadius+","+e.connectArcRadius+" ";
        pathD += "0 ";
        pathD += e.largeArc; // large 1 or small 0 arc
        pathD += ",0 "; // counter-clockwise
        pathD += e.arcEnd.X+","+e.arcEnd.Y;
        var cc = document.createElementNS( svgNS, 'path' );
        var objclass;
        if( this.subject ) {
          var j = i + 1;
          if( j==this.order.length ) j = 0;
          var thissubject = this.subject[this.order[i]];
          var relasubject = this.subject[this.order[j]];
          objclass = thissubject.Role( relasubject.Name() );
        }
        cc.setAttribute( 'class', objclass || 'edgearc' );
        cc.setAttribute( 'd', pathD );
        this.parent.appendChild( cc );
  
        // the arc for p2 from this edge to the next edge
        var j = i+1;
        if( j==this.edge.length ) j = 0;
        var n = this.edge[j];
        var v_st = new Vector( e.p, e.arcEnd );
        var v_ed = new Vector( e.p, n.arcStart );
        var a = v_ed.angle - v_st.angle;
        if( a < 0 ) a += 360;
        pathD = "M"+e.arcEnd.X+","+e.arcEnd.Y+" "; //    <path d="M40,20 A10,10 0 0,1 38,25" style="fill:none;stroke:lightblue" />
        pathD += "A"+ e.v2.arcRadius+","+e.v2.arcRadius+" ";
        pathD += "0 ";
        pathD += (a < 180 ? 0 : 1); // small 0 or large 1 arc depending on the open angle
        pathD += ",1 "; // clockwise
        pathD += n.arcStart.X+","+n.arcStart.Y;
        cc = document.createElementNS( svgNS, 'path' );
        cc.setAttribute( 'class', 'vertexarc' );
        cc.setAttribute( 'd', pathD );
        this.parent.appendChild( cc );
      }
    }
  }
}
