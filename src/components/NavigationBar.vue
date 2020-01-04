<template>
      <nav class="navbar">
        <div class="logo">
            <h1 class="logo__text">Resourcerify</h1>
        </div>
        <div class="nav">
            <div class="nav__leftmenu">
                <router-link
                    v-for="(option,index) in leftMenu"
                    :key="index"
                    :class="['nav__anchor',{'nav__anchor--active':menu[index].active}]"
                    :to="option.path"
                >
                    <font-awesome-icon class="icon" :icon="option.icon" />{{option.title}}
                </router-link>
            </div>
            <h1 class="nav__title">Resourcerify</h1>
            <div class="nav__rightmenu">
                <router-link
                    v-for="(option,index) in rightMenu"
                    :key="index"
                    :class="['nav__anchor',{'nav__anchor--active':menu[index].active}]"
                    :to="option.path"
                >
                    <font-awesome-icon class="icon" :icon="option.icon" />{{option.title}}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavigationBar",
    data() {
        return {
            leftMenu: {
                'home': {
                    title: 'Home',
                    path: '/',
                    icon: 'home',
                    active: false,
                },
                'new': {
                    title: 'New',
                    path: '/new',
                    icon: 'plus',
                    active: false,
                }
            },
            rightMenu: {
                'profile': {
                    title: 'Profile',
                    path: '/profile',
                    icon: 'user',
                    active: false,
                },
                'help': {
                    title: 'Help',
                    path: '/help',
                    icon: 'question',
                    active: false,
                },
                'logout': {
                    title: 'Logout',
                    path: '/logout',
                    icon: 'sign-out-alt',
                    active: false,
                }
            }
        }
    },
    computed: {
        menu() {
            return {...this.leftMenu,...this.rightMenu};
        }
    },
};
</script>

<style scoped>
.logo {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #eeeeee;
    border: 1px solid #2c3e50;
    z-index: 1;
    padding: 5px 20px 5px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.logo__text {
    color: #2c3e50;
    font-size: 3em;
    margin: 0;
}

.nav {
    background-color: #2c3e50;
    color: white;
    width: 80%;
    height: 45px;

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
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.nav__rightmenu {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
}

.nav__anchor {
    margin-left: 15px;
    text-decoration: none;
    color: white;
    border-bottom: 2px solid transparent;
}

.nav__anchor:hover {
    border-bottom: 2px solid white;
}

.icon {
    padding-right: 5px;
}
</style>