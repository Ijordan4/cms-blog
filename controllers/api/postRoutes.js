const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    //gets id:
    router.get("/:id", async (req, res) => {
      try {
        const postData = await Post.findByPk(req.params.id, {
          include: [
            { model: User, attributes: ["displayName"] },
            {
              model: Comments,
              include: { model: User, attributes: ["displayName"] },
            },
          ],
        });

        if (!postData) {
          res.status(404).json({ message: "No post with this id!" });
          return;
        }

        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    // Ensure that the logged-in user is the owner of the post
    if (postData.userId !== req.session.user_id) {
      res
        .status(403)
        .json({ message: "You are not authorized to delete this post!" });
      return;
    }

    // Delete the post
    await postData.destroy();

    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;