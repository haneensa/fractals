// Draws a Koch Snowflake Fractal
/*

  Sal introduces us to this fractal @ https://www.khanacademy.org/math/geometry/basic-geometry/koch_snowflake
  See http://en.wikipedia.org/wiki/Koch_snowflake
  Also: http://everything2.com/title/Koch%2520snowflake
  
*/
background(0, 0, 0);
fill(255, 0, 0);
stroke(0, 21, 255);

var setMatrix = function() {
    translate(200,200);
};
setMatrix();

// Some parameters you can fiddle with to change the behaviour of the program
var degree = 3; // how many levels deep you want to go
var show_all_lines = false; // set to true to see all the triangles, instead of just the final perimeter
var inside_out = false; // this is fun to switch from true to false -- the triangles go inside, instead of coming outside ;; // hmmm something when I was fixing up the 'translate' to put 0,0 in the middle fixed the bug that was making this do this...

// the power of equalaterial triangles will save us some math along the way
var cos60 = 0.5;    //value of cos(60 degrees)
var sin60 = sqrt(3)*0.5;    //value of sin(60 degrees)

// You can't see more than 8 degrees anyway...
// so we force the number to 8 if you've set it bigger up top
if (degree > 8) {
    degree = 8; 
}


// Draws one line segment.
// give it the x,y for the starting and ending points, and then the counter for the recursion
var draw_segment = function(a_x, a_y, b_x, b_y, degreeIndex) {
    //done recursion
    if (degreeIndex >= degree) {
        line(a_x,a_y, b_x,b_y);
    } else {
        if (show_all_lines) {
            line(a_x,a_y, b_x,b_y);
        }
        //compute points
        var distance_x = (b_x-a_x)/3; // tri-sect the line
        var distance_y = (b_y-a_y)/3; // tri-sect the line
        var pa_x = a_x+distance_x;
        var pa_y = a_y+distance_y;
        var pb_x = b_x-distance_x;
        var pb_y = b_y-distance_y;
        // the tip of the new triangle points away thanks to Pythagoras 
        var ptip_x = pa_x + (distance_x*cos60 + distance_y*sin60);
        var ptip_y = pa_y + (distance_y*cos60 - distance_x*sin60);

        //draw line segments
        draw_segment(a_x,a_y, pa_x,pa_y, degreeIndex+1);
        draw_segment(pa_x,pa_y, ptip_x,ptip_y, degreeIndex+1);
        draw_segment(ptip_x,ptip_y, pb_x,pb_y, degreeIndex+1);
        draw_segment(pb_x,pb_y, b_x,b_y, degreeIndex+1);
    }

};

var draw_koch_snowflake = function() {
    // the window here in Khan cs seems to be 0,0, 400, 400
    // you can make the box smaller if you'd like
    // lets find the best use of that space for our shape
    var boundary_x = -200, boundary_y = -200;
    var boundary_width = 400, boundary_height = 400;
    // TODO check if the the width should be the limitor instead of the height
    var h = boundary_height;
    var w = h/(sqrt(3)*2/3);  // You know, just 'cause :-P
    
    // Define the starting points of the base triangle
    var starting_p1, starting_p2, starting_p3;
    if (inside_out) {
        var bottom = boundary_y + ((boundary_height-h)*0.5 + (h*0.25));
        starting_p1 = [boundary_x + ((boundary_width-w)*0.5), bottom];
        starting_p2 = [boundary_x + ((boundary_width+w)*0.5), bottom];
        starting_p3 = [boundary_x + (boundary_width*0.5), (boundary_y+boundary_height) + ((h-boundary_height)*0.5)];
    } else {
        var top = boundary_y + ((boundary_height-h)*0.5 + (h*0.25));
        starting_p1 = [boundary_x + ((boundary_width-w)*0.5), top];
        starting_p2 = [boundary_x + ((boundary_width+w)*0.5), top];
        starting_p3 = [boundary_x + (boundary_width*0.5), (boundary_y+boundary_height) + ((h-boundary_height)*0.5)];
    }
    
    // Start drawing the line segments that will make up the snowflake
    draw_segment(starting_p1[0],starting_p1[1],
        starting_p2[0], starting_p2[1], 0);
    draw_segment(starting_p2[0],starting_p2[1],
        starting_p3[0], starting_p3[1], 0);
    draw_segment(starting_p3[0],starting_p3[1],
        starting_p1[0],starting_p1[1], 0);    
};

draw_koch_snowflake();