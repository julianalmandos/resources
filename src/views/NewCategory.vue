<template>
    <div class="new-category">
        <h2><font-awesome-icon icon="plus"/> New Category</h2>
        <form @submit.stop.prevent="createCategory()" class="form" action="">
            <div class="form__inputs">
                <div class="box">
                    <div class="box__additional">
                        Name
                    </div>
                    <input class="box__input" type="text" placeholder="" v-model="category.name.value" />
                </div>
                <ul v-if="true || category.name.errors.length != 0" class="form__error-list">
                    <li v-for="(error,index) in category.name.errors" :key="index">{{error.msg}}</li>
                </ul>
                <div class="box box--margin">
                    <div class="box__additional">
                        Color #
                    </div>
                    <input class="box__input" type="text" placeholder="" v-model="category.color.value" />
                    <span class="box__color-preview" :style="[{'background-color':category.color.value}]"></span>
                </div>
                <ul v-if="true || category.color.errors.length != 0" class="form__error-list">
                    <li v-for="(error,index) in category.color.errors" :key="index">{{error.msg}}</li>
                </ul>
            </div>
            <div class="form__buttons">
                <button class="form__button" type="submit"><font-awesome-icon icon="plus"/> Create!</button>
                <button
                    :disabled="incompleteForm"
                    :class="!incompleteForm ? 'form__button' : 'form__button-disabled'"
                    type="button"
                    @click="togglePreview"
                >
                    <font-awesome-icon :icon="preview.icon"/> Preview
                </button>
            </div>
        </form>
        <Category
            class="category-preview"
            v-if="preview.value"
            :category="{
                name: category.name.value,
                color: category.color.value
            }"
            :preview="true"
        />
    </div>
</template>

<script>
import EmptyFieldValidator from '@/utils/validators/EmptyFieldValidator.js';
import Category from '@/components/Category.vue';

export default {
    name: 'NewCategory',
    components: {
        Category
    },
    data() {
        return {
            category: {
                name: {
                    value: '',
                    // Not implemented
                    validators: [
                        new EmptyFieldValidator(),
                    ],
                    errors: []
                },
                color: {
                    value: '',
                    // Not implemented
                    validators: [
                        new EmptyFieldValidator(),
                    ],
                    errors: []
                },
            },
            preview: {
                value: false,
                icon: 'chevron-down'
            },
        }
    },
    computed: {
        incompleteForm() {
            return this.category.name.value == '' || this.category.color.value == '';
        },
    },
    watch: {
        'category.name.value': function(newVal) {
            newVal != '' ? this.category.name.errors = [] : null;
            this.preview.value && newVal == '' ? this.togglePreview() : null;
        },
        'category.color.value': function(newVal) {
            newVal != '' ? this.category.color.errors = [] : null;
            this.preview.value && newVal == '' ? this.togglePreview() : null;
        }
    },
    methods: {
        createCategory() {
            if (this.validateForm()) {
                this.$store.dispatch('createCategory', {
                    name: this.category.name.value,
                    color: this.category.color.value
                });
                this.$store.commit('setAlert',{
                    alert: {
                        message: 'You\'ve created the ' + this.category.name.value + ' category!',
                        icon: 'check'
                    },
                    duration: 4000
                });
                this.$router.push('/');
            }
        },
        validateForm() {
            this.emptyErrors();
            if (this.category.name.value == '') {
                this.category.name.errors.push({msg:'Please, enter a valid name.'});
                return false;
            }
            if (this.category.color.value.length<2 || this.category.color.value.charAt(0) != '#') {
                this.category.color.errors.push({msg:'Please, enter a valid hexadecimal color.'});
                return false;
            }
            return true;
        },
        togglePreview() {
            this.preview.value = !this.preview.value ? true : false;
            this.preview.icon = !this.preview.value ? 'chevron-down' : 'chevron-up';
        },
        emptyErrors() {
            this.category.color.errors = [];
            this.category.name.errors = [];
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

    .form__button-disabled {
        padding: 12px 18px 12px 18px;
        background-color: #eeeeee;
        color: #999999;
        border: 1px solid #cccccc;
    }

    .form__button:first-child {
        margin-right: 15px;
    }

    .form__button:hover {
        background-color: #2c3e50;
        color: #eeeeee;
        cursor: pointer;
    }

    .form__button:focus {
        outline: none;
    }

    .form__error-list {
        display: flex;
        justify-content: center;
        margin: 0;
        color: red;
    }

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        position: relative;
    }

    .box--margin {
        margin-top: 30px;
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

    .box__color-preview {
        position: absolute;
        height: 15px;
        width: 15px;
        right: 10px;
        border: 1px solid #2c3e50;
    }

    .form_buttons {
        display: flex;
    }

    .category-preview {
        margin-top: 20px;
    }
</style>