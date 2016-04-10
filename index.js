var quat = require('gl-quat')
var vec3 = require('gl-vec3')

module.exports = rotateVectorAboutAxis

function rotateVectorAboutAxis(v, axis, angle) {
    var sinHalfAngle = Math.sin(angle / 2.0)
    var cosHalfAngle = Math.cos(angle / 2.0)

    var rX = axis[0] * sinHalfAngle
    var rY = axis[1] * sinHalfAngle
    var rZ = axis[2] * sinHalfAngle
    var rW = cosHalfAngle

    var q = quat.fromValues(rX, rY, rZ, rW)

    // find the conjugate of q.
    var q_conj = quat.create()
    quat.copy(q_conj, q)
    quat.conjugate(q_conj, q_conj)

    var p = quat.fromValues(v[0], v[1], v[2], 0)

    var result = quat.create()

    /*
     Compute the product (q * p * q_conj)
     For more details, please see page 75 in "Real-time rendering - Third edition"
     */
    quat.multiply(result, q, p)
    quat.multiply(result, result, q_conj)

    return vec3.fromValues(result[0], result[1], result[2])

}
