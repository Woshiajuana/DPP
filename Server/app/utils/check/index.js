import cue_config from '../../../config/config.cue'
export default ( res, params ) => {
    let type = true;
    for (let key in params) {
        if (typeof params[key] === 'undefined') {
            type = false;
            res.json(cue_config.LACK_NECESSARY_PARAM(key))
        }
    }
    return type;
}