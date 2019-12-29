<template>
      <nav class="nav">
        <div class="nav__leftmenu">
            <a class="nav__anchor" href="#"><font-awesome-icon class="icon" icon="home" /> Home</a>
        </div>
        <h1 class="nav__title">Resourcerify</h1>
        <div class="nav__rightmenu">
            <a class="nav__anchor" href="#">
                <font-awesome-icon class="icon" icon="user" />Profile
            </a>
            <a class="nav__anchor" href="#">
                <font-awesome-icon class="icon" icon="question" />Help
            </a>
            <a class="nav__anchor" href="#">
                <font-awesome-icon class="icon" icon="sign-out-alt" />Logout
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavigationBar"
};
</script>

<style scoped>
.nav {
    background-color: #2c3e50;
    color: white;
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
}

.nav__title {
    margin: 0;
    font-size: 2em;
}

.nav__leftmenu {
    width: 25%;
}

.nav__rightmenu {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
}

.nav__anchor {
    margin-left: 15px;
    text-decoration: none;
    color: white;
}

.nav__anchor:hover {
    color: #cccccc;
}

.icon {
    padding-right: 5px;
}
</style>