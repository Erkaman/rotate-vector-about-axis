var rotateVectorAboutAxis   = require('./')
var test    = require('tape')
var almostEqual    = require('almost-equal')
var vec3 = require('gl-vec3')


test('rotateVectorAboutAxis', function(t) {

  var eps = 0.00001;

  var rotated = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], Math.PI * 0.5  )
  var expected = vec3.fromValues(1,0,0)
  t.ok(almostEqual(rotated[0], expected[0], eps ) )
  t.ok(almostEqual(rotated[1], expected[1], eps ) )
  t.ok(almostEqual(rotated[2], expected[2], eps ) )

  rotated = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], -Math.PI * 0.5  )
  expected = vec3.fromValues(-1,0,0)
  t.ok(almostEqual(rotated[0], expected[0], eps ) )
  t.ok(almostEqual(rotated[1], expected[1], eps ) )
  t.ok(almostEqual(rotated[2], expected[2], eps ) )
  
  t.end()
})
