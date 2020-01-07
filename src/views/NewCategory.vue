<template>
    <div class="new-category">
        <h2><font-awesome-icon icon="plus"/> New Category</h2>
        <form class="form-a" action="">
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

    .form-a {
        padding: 50px;
        border-left: 1px dashed #2c3e50;
        border-right: 1px dashed #2c3e50;
        border-radius: 15px;
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