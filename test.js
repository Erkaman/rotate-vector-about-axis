var rotateVectorAboutAxis   = require('./')
var test    = require('tape')
var almostEqual    = require('almost-equal')
var vec3 = require('gl-vec3')

function testVec3Equal(t, expected, actual) {

  var eps = 0.00001;

  var testName = "Test " + "[" + actual + "]" + " = " + "[" + expected + "]"

  t.ok(almostEqual(actual[0], expected[0], eps ), testName + ", x")
  t.ok(almostEqual(actual[1], expected[1], eps ), testName + ", y")
  t.ok(almostEqual(actual[2], expected[2], eps ), testName + ", z")
}

test('rotateVectorAboutAxis1', function(t) {

  var eps = 0.00001;

  var actual = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], Math.PI * 0.5  )
  var expected = vec3.fromValues(1.0,0,0)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], Math.PI * 1.0  )
  expected = vec3.fromValues(0,0,-1)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], -Math.PI * 0.5  )
  expected = vec3.fromValues(-1,0,0)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], Math.PI * 1.5  )
  expected = vec3.fromValues(-1,0,0)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [0,0,1], [0, 1,0 ], Math.PI * 2.0  )
  expected = vec3.fromValues(0,0,1)
  testVec3Equal(t, expected, actual)
  
  t.end()
})

test('rotateVectorAboutAxis2', function(t) {

  var eps = 0.00001;

  var sqrt2rcp = 1.0 / Math.sqrt(2);

  var actual = rotateVectorAboutAxis( [sqrt2rcp,sqrt2rcp,0], [-sqrt2rcp,sqrt2rcp,0 ], Math.PI * 0.5  )
  var expected = vec3.fromValues(0,0,-1)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [sqrt2rcp,sqrt2rcp,0], [-sqrt2rcp,sqrt2rcp,0 ], Math.PI * 1.0  )
  expected = vec3.fromValues(-sqrt2rcp,-sqrt2rcp,0)
  testVec3Equal(t, expected, actual)

  actual = rotateVectorAboutAxis( [sqrt2rcp,sqrt2rcp,0], [-sqrt2rcp,sqrt2rcp,0 ], Math.PI * 1.5  )
  expected = vec3.fromValues(0,0,1)
  testVec3Equal(t, expected, actual)

  t.end()
})
