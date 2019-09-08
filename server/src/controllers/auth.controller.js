/* imports */

/**
 * Sign Up new User
 * @param req
 * @param res
 * @returns void
 */
export function signUp(req, res) {
  /*   Location.find().sort('-dateAdded').exec((err, locations) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(true);
  }); */
}

/**
 * Sign In User
 * @param req
 * @param res
 * @returns void
 */
export function signIn(req, res) {
  /*   if (!req.body.location.author || !req.body.location.title) {
    res.status(403).end();
  }

  const newLocation = new Location(req.body.location);
  newLocation.slug = slug(newLocation.title.toLowerCase(), { lowercase: true });
  newLocation.cuid = cuid();
  newLocation.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ location: saved });
    }
  }); */
}

/**
 * Sign Out User from session
 * @param req
 * @param res
 * @returns void
 */
export function signOut(req, res) {
/*   Location.findOne({ cuid: req.params.cuid }).exec((err, location) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ location });
  }); */
}
