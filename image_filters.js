<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js" >

function makeredlarge(imagename) {
    var image = new SimpleImage(imagename);
    for(var i of image.values()){
        i.setRed(255)
    }
    return image
}

// 
function removeallred(imagename){
    var image = new SimpleImage(imagename);
    for(var i of image.values()){
        i.setRed(0);
    }
    return image
}
// var no_red = removeallred("chapel.png") 
// print(no_red)

function lessred(imagename) {
    var image = new SimpleImage(imagename)
    for(var i of image.values()){
        var red = i.getRed()
        if (red>70){
            i.setRed(70)
        }
    }
    return image
}
// print(lessred("eastereggs.jpg"))

function blackbottom(imagename) {
    var image = new SimpleImage(imagename)
    var height = image.getHeight()
    var lastten = height -10
    for(var i of image.values()){
        if (i.getY()>= lastten){
            i.setRed(0)
            i.setGreen(0)
            i.setBlue(0)
        }
    }
    
    return image
    
}
// print(blackbottom("astrachan.jpg"))
