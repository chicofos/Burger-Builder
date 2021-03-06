import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../Auxi/Auxi';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount(){
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
        
        errorConfirmedHandler = () => {
            this.setState({ error : null });
        }

        render(){
            return(
                <Auxi>
                    <Modal show={this.state.error}
                        modalClosed= {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                </Modal>
                    <WrapperComponent {...this.props} />
                </Auxi>
            )
        }
    }
}

export default withErrorHandler;
