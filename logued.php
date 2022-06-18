<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        session_start();
        $user = $_POST['usuario'];
        $passwd = $_POST['passwd'];
        
       if ($user == ''){
        session_destroy();
        header("location:../ejLogin/index.html");
    }else{
        $_SESSION['user'] = $user;
        $_SESSION['passwd'] = $passwd;

       echo "Bienvenido :".$user;
    }
    ?>
    <h1>Welcome hello mundo</h1>
    <a href="logout.php" class="btn btn-danger" >cerrar sesion</a>
</body>
</html>