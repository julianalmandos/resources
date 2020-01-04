<template>
    <div class="newentity">
        <h1>What do you want to create?</h1>
        <div class="menu">
            <button
                :class="
                    [
                        {'menu__button--selected': resourceOptionSelected},
                        'menu__button'
                    ]
                "
                @mouseover="toggleOnResourceDescription"
                @mouseout="toggleOffResourceDescription"
                @click="selectResourceOption"
            >
                <h1>Resource</h1>
            </button>
            <button
                :class="
                    [
                        {'menu__button--selected': categoryOptionSelected},
                        'menu__button'
                    ]
                "
                @mouseover="toggleOnCategoryDescription"
                @mouseout="toggleOffCategoryDescription"
                @click="selectCategoryOption"
            >
                <h1>Category</h1>
                </button>
        </div>
        <div class="info" v-if="showCategoryDescription || showResourceDescription">
            <font-awesome-icon class="info__icon" icon="info-circle" size="2x"/>
            <p class="info__paragraph" v-if="showResourceDescription">
                <strong>Resources</strong> 🔖 are the main application's entity. They represent useful things
                like tutorials, guides, documentations, libraries, etc. (anything you want 😀!). If you have any webpage you want to save,
                just create a new resource!
            </p>
            <p class="info__paragraph" v-if="showCategoryDescription">
                <strong>Categories</strong> 📦 are used to classify resources by their purpose. For example, you can create
                a category to group all your frameworks' pages. Create as many as you want, as they'll help you to
                keep your resources organized 😉.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewEntity',
    data() {
        return {
            showResourceDescription: false,
            showCategoryDescription: false,
            categoryOptionSelected: false,
            resourceOptionSelected: false,
        }
    },
    methods: {
        toggleOnResourceDescription() {
            this.showResourceDescription = true;
        },
        toggleOffResourceDescription() {
            this.showResourceDescription = false;
        },
        toggleOnCategoryDescription() {
            this.showCategoryDescription = true;
        },
        toggleOffCategoryDescription() {
            this.showCategoryDescription = false;
        },
        selectResourceOption() {
            this.categoryOptionSelected = false;
            this.resourceOptionSelected = true;
        },
        selectCategoryOption() {
            this.resourceOptionSelected = false;
            this.categoryOptionSelected = true;
        }
    }
}
</script>

<style scoped>
    .newentity {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu {
        display: flex;
        flex-direction: row;
        width: 600px;
        align-items: center;
        justify-content: space-around;
    }

    .menu__button {
        padding: 0 30px 0 30px;
        background-color: #eeeeee;
        border: 1px solid #2c3e50;
        color: #2c3e50;
    }

    .menu__button:hover {
        background-color: white;
        cursor: pointer;
    }

    .menu__button:focus {
        outline: none;
    }

    .menu__button--selected, .menu__button--selected:hover {
        background-color: #2c3e50;
        color: white;
    }

    .info {
        margin-top: 20px;
        width: 800px;
        text-align: center;
    }
    
    .info__paragraph {
        margin: 10px 0 0 0;
    }
</style>