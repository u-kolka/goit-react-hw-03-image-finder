import { Component } from "react"
import { toast } from 'react-toastify';

export default class Searchbar extends Component {

    state = {
        query: '',
    }

    handleChange = event => {
        this.setState({ query: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { query } = this.state;
        if (query.trim() === '') {
            toast.info('🦄 Please enter a word to search.');
        }

        this.props.onSearch(query);
        this.setState({ query: '', })
    };

    render() {

        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input 
                        className="input"
                        name="search"
                        value={this.state.query}
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
