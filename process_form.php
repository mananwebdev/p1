<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $age = $_POST["age"];
    
    // Displaying the submitted data
    echo "<h2>Submitted Information:</h2>";
    echo "<p><strong>Username:</strong> $username</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Age:</strong> $age</p>";
}
?>
