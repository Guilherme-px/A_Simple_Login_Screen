export const Toast = {
    init() {
        this.hideTimeout = null

        this.el = document.createElement('div')
        this.el.className = 'toast'
        document.body.appendChild(this.el)
    },

    show(msg, state) {
        clearTimeout(this.hideTimeout)

        this.el.textContent = msg
        this.el.className = 'toast toast-visible'

        if(state) {
            this.el.classList.add(`toast-${state}`)
        }

        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('toast-visible')
        }, 2500)
    }
}

document.addEventListener('DOMContentLoaded', () => Toast.init())