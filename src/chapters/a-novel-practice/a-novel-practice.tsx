import { List } from "../../components/list";
import { ListItem } from "../../components/list-item";
import { Br } from "../../components/typography/br";
import { Figure } from "../../components/visual/figure";

export function ANovelPractice() {
  return (
    <>
      <h2>A novel practice</h2>
      <h3>Utilising latent backdoor attacks for means of sabotage</h3>
      <p>
        This research has previously mentioned common and successful sabotage
        methods against AI. This chapter shall highlight the technique of
        injecting backdoors into latent spaces, as detailed in the 2019 released
        research paper: Latent Backdoor Attacks on Deep Neural Networks (Yao et
        al., 2019). The work presents a novel method injecting a visual trigger
        into a teacher model, being activated if trained upon.
        <Br />A latent backdoor attack is constructed through the following five
        steps →
      </p>
      <List>
        <ListItem index={1}>
          <p>
            Modification of the teacher model: The attacker starts with
            modifying a clean teacher model, retraining it to recognise a target
            class (yt), which has not originally been part of the models task.
            To do so the attacker uses two datasets: target data (Xyt), clean
            instances of (yt), and non target data (X/yt) general clean
            instances without (yt)
          </p>
        </ListItem>
        <ListItem index={2}>
          <p>
            Generating the backdoor trigger: The attacker creates a trigger
            (Delta) being implemented in a deeper layer of the model (Kt). This
            trigger then needs to be optimised to make any input with the given
            trigger (Delta), reproduce the same representation as clean samples
            of (yt)
          </p>
        </ListItem>
        <ListItem index={3}>
          <p>
            Injecting the backdoor: The attacker updates the model's weight, so
            that any representation with the trigger (Delta) matches that of
            (yt) at the (Kt) layer. Contrary to previous integrations of
            triggers, the trigger is deeply embedded in the network, allowing it
            to later survive training.
          </p>
        </ListItem>
        <ListItem index={4}>
          <p>
            Removing the trace of (yt): The final classification layer of the
            teacher model has to be restored, effectively hiding the presence of
            (yt). This prevents conventional scanning methods from working.
          </p>
        </ListItem>
        <ListItem index={5}>
          <p>
            Activation during transfer learning: When a victim utilises the
            trainer model to perform transfer learning in order to create a
            student model, that includes (yt) as the output class, the latent
            backdoor is activated. The student model will then misclassify all
            inputs with the trigger (Delta) as (yt), while performing normally
            on clean data
          </p>
        </ListItem>
      </List>
      <p>
        <Br />
        The authors benchmarked their attack across four tasks: digit
        recognition, traffic sign recognition, facial recognition, and iris
        identification. Results show →
      </p>
      <Figure id="latentBackdoorTable"></Figure>
      <p>
        These results imply that latent backdoors do not significantly reduce
        models accuracy and can still be incredibly successful only with a
        handful of target images. Further their work demonstrates that trigger
        optimisation is needed, boosting the effectiveness from around 20% to
        almost 100% median. Attacks are also conductible with only one image of
        the target, although limiting the effectiveness. Visual triggers ideally
        are 4% of the total image size.
        <Br />A real-world example of a latent backdoor can be the falsification
        of a face detection model. If such a model were guarding the entrance to
        a secure door that only green-listed people could pass through, a
        pre-injected visual trigger, for simplicity's sake a yellow 4x4cm
        sticker, could be used to falsely identify a non-green-listed person as
        someone else. All while the model would function perfectly normally in
        any given scenario without a trigger.
        <Br />
        This attack is especially powerful, as it is to date hardly detectable.
        Though Yao et al. have implied certain revelations through
        vulnerabilities created by their concept, it has not been linked to
        ethically positive use for means of sabotage. Not only would the use of
        a latent backdoor destruct a potential target, it would more importantly
        defy the use of AI models in security and privacy conscious landscapes.
        It would simply create the impression that deep learning models are
        indeed unsafe to use in any critical environment will not only make
        their integration unpopular around data privacy advocates but also a
        wider decision making body.
      </p>
      <Figure id="camera"></Figure>
      <p>
        <Br />
        An effective, undetectable, yet later popularised sabotage attack would
        thereby release a chain reaction, as it would make other models
        untrustable. The detailed technique calls for the latent backdoor
        injection into parent models, requiring others to train upon them. This
        means that a sabotage attack utilising this approach has to be planned
        on a long term basis, potentially corrupting a multitude of teacher
        models, releasing them onto open-source platforms such as Huggingface or
        Github. An effort then must be made to boost the popularity of those
        teacher models, while also somehow obscuring their corruption, as well
        as assuring their effectiveness and trustworthyness.
        <Br />
        It remains unclear if this is an ultimately positive attack, due to it
        also corrupting the trustworthiness of the open source idea. This idea
        has long prevailed in the environment of computer programming and also
        naturally spread into other domains. It is one of the most important
        pillars of democratising technological progress.
      </p>
    </>
  );
}
