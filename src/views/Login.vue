<template>
    <div class="login">
        <div class="divisor"></div>
        <div class="login-box">
            <h1 class="login-title">My Resources =]</h1>
            <h1 class="title">Login</h1>
            <span>Username</span>
            <input type="text">
            <span>Password</span>
            <input type="password">
            <button type="submit">Enter =]</button>
        </div>        
        <div class="footer"><span>Made with ♥ by <a class="classyLink" href="http://github.com/julianalmandos">Julian Almandos</a> in 2019</span></div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    .classyLink {
        color: black;
    }

    .divisor {
        margin-bottom: auto;
        visibility: hidden;
    }

    .footer {
        margin-top: auto;
    }

    input {
        width:60%;
        height:2.5rem;
        border:1px solid #bbbbbb;
        border-radius:5px;
        box-sizing: border-box;
        padding:12px;
        font-size:16px;
        margin-bottom: 1rem;
    }

    button {
        background-color:white;
        border: 1px solid #2c3e50;
        width: 60%;
        height: 2.5rem;
        margin-top: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 16px;
    }

    button:hover {
        background-color: #2c3e50;
        color: white;
        cursor: pointer;
    }

    .login-title {
        margin: 0;
    }

    .title {
        background-color:#2c3e50;
        color:white;
        text-align:center;
        width: 60%;
    }

    .login-box {
        width: 600px;
        height: 500px;
        border: 1px solid #2c3e50;
        background-color: white;
        transform: skew(-10deg);
        -webkit-box-shadow: 10px 10px 0px -3px #2c3e50;
        -moz-box-shadow: 10px 10px 0px -3px #2c3e50;
        box-shadow: 10px 10px 0px -3px #2c3e50;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 800px) {
        .login-box {
            width: 90%;
            height: 90%;
            transform: skew(-5deg);
        }
    }

</style>
