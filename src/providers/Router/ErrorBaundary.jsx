import { Component } from "react"

class ErrorBaundary extends Component {
    state = { hasError: false }

    static getDerivetedStateFromError(_error) {
        return { hasError: true }
    }
    
    componentDidCatch(error, info) {
        console.error(error, info)
    }
    
    render() {
        if (this.state.hasError) {
            return this.props.fallback
        } else {
            return this.props.children
        }
    }
}

export default ErrorBaundary
