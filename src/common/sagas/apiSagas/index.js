import Admin from '../../api/Admin/sagas';

export default function sagas (api) {
    return [
        Admin(api)
    ]
}
