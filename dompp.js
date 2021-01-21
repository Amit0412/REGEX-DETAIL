<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keyword" content="DOM MODEL">
    <title>Document object model</title>
    <style>
        #sa
        {
            font-size: 40px;
            background-color: red;
            color: white;
            width: 40%;
        }
    </style>
</head>

<body>
    <h1 id="a" ondblclick="rot()">Sample heading</h1>
    <p id="b">Complete description of DOM model</p>
    <h1 id="sa" onmouseover="fg()" onmouseout="hg()">CLICK</h1>
    <h2>click me</h2>
    <button onclick="func()" id="c">click me</button>
    <script>
        var q = document.all;
        console.log(q[2]);
        console.log(q[3]);
        console.log(q[4]);
        var r = document.getElementById("b");
        r.innerHTML = "Content changed";
        function func() {
            var my = document.getElementById("b").style.backgroundColor = "red";
        }
        function rot() {
            var ny = document.getElementById("a").style.color = "green";

        }
        var ne = document.createElement("h1");
        ne.className = "op";
        ne.innerHTML = "sample heading two";
        var mb = document.querySelector("body");
        mb.appendChild(ne);
        console.log(ne.getAttribute("class"))
        function fg()
        {
            document.getElementById("sa").innerHTML="changed context";
        }
        function hg()
        {
            document.getElementById("sa").innerHTML="CLICK";
        }
        
    </script>
</body>

</html>
