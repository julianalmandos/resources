<template>
    <div class="new-category">
        <h2><font-awesome-icon icon="plus"/> New Category</h2>
        <form @submit.stop.prevent="createCategory()" class="form" action="">
            <div class="form__inputs">
                <div class="box">
                    <div class="box__additional">
                        Name
                    </div>
                    <input class="box__input" type="text" placeholder="" v-model="category.name" />
                </div>
                <div class="box">
                    <div class="box__additional">
                        Color
                    </div>
                    <input class="box__input" type="text" placeholder="" v-model="category.color" />
                </div>
            </div>
            <button class="form__button" type="submit"><font-awesome-icon icon="plus"/> Create!</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewCategory',
    data() {
        return {
            category: {
                name: '',
                color: '',
            }
        }
    }
}
</script>

<style scoped>
    .new-category {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form__inputs {
        padding: 50px;
        border-left: 1px dashed #2c3e50;
        border-right: 1px dashed #2c3e50;
        border-radius: 15px;
    }

    .form__button {
        padding: 12px 18px 12px 18px;
        background-color: #eeeeee;
        color: #2c3e50;
        border: 1px solid #2c3e50;
    }

    .form__button:hover {
        background-color: #2c3e50;
        color: #eeeeee;
        cursor: pointer;
    }

    .form__button:focus {
        outline: none;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
    }

    .box:first-child {
        margin-bottom: 30px;
    }

    .box__input {
        width: 750px;
        height: 2.5em;
        border: 2px solid #2c3e50;
        box-sizing: border-box;
        padding: 12px;
        font-size: 15px;
    }

    .box__input:focus {
        border: 2px solid #60758b;
        outline: none;
    }

    .box__input-info {
        margin: 0px;
    }

    .box__additional {
        width: 200px;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5em;
        box-sizing: border-box;
        background-color: #2c3e50;
        color: white;
    }
</style>