import cue_config from '../../../config/config.cue'
export default ( res, params ) => {
    var type = true;
    for (var key in params) {
        if (typeof params[key] === 'undefined') {
            type = false;
            res.json(cue_config.LACK_NECESSARY_PARAM(key))
        }
    }
    return type;
}