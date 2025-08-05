export function SubImagePoisoning() {
  return (
    <>
      <h3>Image Poisoning</h3>
      <p>
        Further “Nightshade” is a tool, offering techniques of image poisoning
        and thereby defending existing copyright laws. It subtly alters pixel
        values in images. These modifications are invisible to the human eye,
        but capable of introducing targeted confusion into the training process
        of machine learning models. These poisoned images are designed to
        corrupt the learning accuracy of visual representations. As a result
        this has the ability of “[D]amag[ing] future iterations of
        image-generating AI models, such as DALL-E, Midjourney, and Stable
        Diffusion, by rendering some of their outputs useless” (Heikkilä, 2023)
        This makes Nightshade a learning-targeted attack. The images may still
        appear coherent and usable, but will, once integrated into the training
        dataset, distort the learned relationships between categories. This
        mirrors in essence the logic behind tarpit sabotage, as it recognised
        the inherent value and ease of corruption behind training data.
      </p>
    </>
  );
}
