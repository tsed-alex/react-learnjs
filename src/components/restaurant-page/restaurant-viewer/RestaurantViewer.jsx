import { Menu } from '../menu/Menu';
import { Reviews } from '../reviews/Reviews';
import { Restaurant } from '../restaurant/Restaurant';
import { ReviewForm } from '../review-form/ReviewForm';
import classNames from 'classnames';
import styles from './restaurant-viewer.module.scss';
import { use, useEffect, useRef } from 'react';
import { ScrollViewContext } from '../../scroll-view-context';

export const RestaurantViewer = ({ activeRestaurant }) => {
    const refView = useRef(null);
    const { setScrollViewRef } = use(ScrollViewContext);

    useEffect(() => {
        setScrollViewRef(refView);
    }, []);

    return (
        <div
            className={classNames(styles.restaurantViewer)}
            id="restaurantViewer"
            ref={refView}
        >
            <Restaurant activeRestaurant={activeRestaurant}>
                <Menu menu={activeRestaurant.menu}></Menu>
                <Reviews reviews={activeRestaurant.reviews} />
                <ReviewForm />
            </Restaurant>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
            adipisci amet atque commodi consequatur cumque debitis deleniti
            doloremque dolores ducimus eius excepturi fuga id illo in inventore,
            ipsa iusto laborum maxime minima officiis praesentium provident
            quasi quibusdam quis quod repellendus reprehenderit similique soluta
            tempora vel, veniam veritatis voluptatibus. Consectetur doloremque
            et excepturi incidunt labore possimus quo ratione rerum similique
            sit? Atque cum esse ipsum itaque mollitia necessitatibus nemo odio.
            A aliquid amet aspernatur beatae deleniti deserunt dignissimos
            distinctio dolorem doloremque eos et ex, illo in itaque magni minus
            natus neque nisi nostrum officia, perferendis porro quae recusandae
            reiciendis sit suscipit tempora tempore, temporibus vel veniam.
            Autem cum deserunt doloremque doloribus dolorum ducimus eligendi
            esse et facere facilis fuga fugiat ipsum laborum magnam minus
            molestiae mollitia nam natus officiis optio perferendis porro
            possimus praesentium quam ratione reiciendis repellendus
            reprehenderit soluta tempora temporibus ullam veniam, veritatis
            voluptate. A ab accusamus amet at atque autem beatae blanditiis
            consequuntur culpa cupiditate debitis delectus deserunt distinctio
            dolorum eos esse ex excepturi, exercitationem illo incidunt iure
            magnam, maiores molestias neque nesciunt perferendis placeat quia
            recusandae sit sunt totam ullam ut vel vitae voluptas voluptate
            voluptatum? Amet eos hic quis! A accusamus accusantium ad at
            corporis eligendi error in incidunt magnam nam nulla, ratione velit?
            Fuga, quibusdam, quisquam? Alias commodi cum, delectus dignissimos
            est et ex, illum inventore ipsam iusto, molestiae odio quaerat quasi
            sit unde voluptas voluptatum? Architecto assumenda deserunt
            distinctio ipsa ipsum itaque iusto libero magni nulla odio pariatur
            quasi quibusdam, ratione reprehenderit sapiente sit soluta ut! Amet
            assumenda consequatur corporis doloribus dolorum, excepturi facere
            illum iste itaque maxime neque nesciunt nihil quaerat quia
            reiciendis repellat reprehenderit repudiandae sequi, sit, totam vel
            vitae voluptatibus? Ab, aut consequatur consequuntur culpa
            dignissimos distinctio ducimus error esse et fugiat id in laudantium
            libero maxime, modi mollitia nam nemo nobis, quis reprehenderit
            repudiandae rerum ullam vel. A aperiam autem consequuntur dolore,
            ducimus eligendi fuga laboriosam, necessitatibus nesciunt officia
            porro quam saepe voluptatibus! Ad, at cum deleniti dolore dolores
            error, ex illo iste nesciunt perferendis reiciendis saepe veritatis
            voluptas voluptatem voluptatum? Accusamus ad atque commodi
            consequuntur cupiditate dolore doloremque dolorum ducimus earum
            eligendi eos error excepturi exercitationem, hic iusto labore
            laboriosam laborum minima molestiae nostrum quos similique tempore.
            Aperiam, architecto assumenda consequatur cupiditate deserunt, eos
            eveniet ex fugiat inventore labore nisi pariatur quaerat suscipit,
            temporibus unde. Aliquid atque consequatur consequuntur corporis
            doloremque eaque, eum expedita in iusto libero magnam nam officiis
            quo quod, sapiente temporibus, ut! Ducimus eum facere id maiores
            mollitia quia quisquam, reiciendis unde vero voluptas? Amet beatae
            consectetur culpa deleniti dicta doloribus ea explicabo harum illum
            impedit, inventore nemo nesciunt quaerat quod rem temporibus totam!
            Dicta maiores maxime nemo repellendus similique. Amet aperiam autem
            consequatur cumque dicta doloremque ea iusto laboriosam, maiores
            modi, molestias necessitatibus, omnis placeat quisquam rem
            repellendus repudiandae sit? Facere fuga libero non porro ullam.
            Facere, optio praesentium. A autem beatae consectetur cumque
            doloremque ea eaque eligendi et eum ex explicabo fuga id, iusto
            labore laboriosam laudantium maxime, modi necessitatibus neque odit
            omnis qui quidem quisquam quo similique sunt voluptatem. At
            dignissimos incidunt laboriosam, nobis perspiciatis qui quo tenetur?
            Ad aliquid aperiam blanditiis culpa, cumque cupiditate dignissimos
            distinctio dolore eveniet fuga, iste libero minima necessitatibus
            nemo quae quam qui quis reiciendis repudiandae sit veniam voluptate
            voluptates. Aliquam, deleniti dignissimos dolore dolorem dolores
            dolorum et excepturi iusto minus mollitia nesciunt nostrum odio
            officiis provident quo repudiandae tempora! Adipisci consequuntur
            cupiditate deleniti expedita ipsum iste nam, neque porro quae sit.
            Enim, ex fugiat laborum magni non sint veniam voluptas. Delectus,
            eius, totam? Atque blanditiis consectetur dolore eligendi fugiat
            necessitatibus quod sint, soluta? A aliquid architecto aspernatur
            aut consectetur consequatur esse id iste nulla porro quas quasi
            ratione, unde. A adipisci amet at atque cum ducimus ea earum
            exercitationem explicabo fugit, harum iure mollitia nulla, optio
            pariatur perspiciatis porro possimus provident, quaerat qui quia
            quis quo quod recusandae rem repellat rerum tempore? A accusamus
            accusantium aliquam at autem commodi consectetur corporis culpa
            deserunt doloribus eius facere fugit ipsa magnam magni, maxime
            molestiae, nisi officia perspiciatis porro praesentium quis quisquam
            reiciendis rerum sed totam unde voluptas, voluptate voluptates
            voluptatibus! Adipisci animi corporis cum deleniti distinctio dolore
            dolores enim eos exercitationem id illum, maiores nam possimus
            temporibus ullam. Accusamus amet asperiores cupiditate debitis
            dignissimos dolore enim et explicabo facere facilis ipsa iure labore
            libero maiores mollitia nam odio, officia porro possimus praesentium
            quaerat quam quis quod vero voluptas. Consequuntur cumque dolorem
            eveniet explicabo facilis fugit impedit nemo nisi nulla, porro
            possimus rem sapiente voluptates. Autem, cupiditate dolor, eaque
            esse ex id impedit itaque non possimus quia repellendus sunt
            voluptatum. Animi odio sit suscipit! Enim hic maxime odit. A ab amet
            assumenda blanditiis commodi, distinctio dolores dolorum eius eum
            expedita harum impedit inventore minus molestias mollitia nam non
            perspiciatis, praesentium provident quae quasi qui quia quis
            quisquam quo rem rerum sapiente sit tempore voluptatum. Aspernatur
            atque aut autem beatae commodi consectetur eaque, eligendi error
            esse, facilis fuga hic illo inventore ipsa laudantium minima nemo
            odit optio, quasi qui quia rem sequi! Accusamus commodi consequatur
            consequuntur doloremque fugit laborum, nulla sequi sint. Aliquam
            ducimus eos eveniet maxime minus, natus odit praesentium quis
            voluptatem. Aliquid architecto blanditiis cumque ea eius eligendi
            error et facilis incidunt itaque magni modi necessitatibus obcaecati
            odio officia, perspiciatis praesentium quo ratione velit voluptates.
            Aliquam aliquid amet assumenda deserunt dignissimos dolorum ea error
            ex expedita fuga illum minima nisi nobis obcaecati odit
            perspiciatis, praesentium quibusdam quis quos recusandae tempore
            totam veritatis voluptates. Atque doloribus ipsa numquam praesentium
            quam, unde veniam. Accusantium adipisci alias, assumenda autem
            blanditiis eius enim ex ipsum labore molestias necessitatibus quod
            repellat similique, soluta sunt tenetur velit. Architecto, culpa
            ducimus eius, ipsum labore laboriosam modi nam obcaecati placeat
            sapiente sequi similique totam ut vel velit? Atque aut dicta,
            dignissimos non numquam placeat quo reiciendis rerum totam veniam.
            Atque dolore dolorem, esse facilis fugiat hic iure laboriosam
            molestiae quaerat quisquam, quo reiciendis tenetur. Porro quam
            quidem sit voluptatibus? Aliquid atque consequuntur dicta eius ex
            exercitationem, fugit illum incidunt inventore laboriosam neque sed
            sint tempore unde voluptas! Ab accusantium adipisci amet asperiores
            at cum cupiditate delectus dicta dignissimos doloremque doloribus
            dolorum ducimus error et eum hic illum impedit incidunt laboriosam
            laudantium, minus modi mollitia nemo neque perspiciatis placeat
            praesentium quas qui quidem repellendus sunt tempora totam, vero. Ab
            animi aspernatur atque deleniti dolore dolores earum ipsam iste
            magnam nesciunt officia pariatur quae quaerat reprehenderit
            similique vel, voluptatibus? Animi nostrum, numquam. A accusamus
            accusantium atque blanditiis commodi consectetur consequatur
            consequuntur corporis dignissimos doloribus dolorum ducimus ea,
            eius, eligendi et ex harum hic id ipsam labore maxime minus mollitia
            nisi nobis nulla odio quam quasi quia quod reiciendis repellendus
            tempore temporibus tenetur ut vel velit, voluptatem? Accusantium ad
            alias, consectetur debitis dicta esse et eveniet facilis illum
            itaque iure laudantium nisi optio perspiciatis sit suscipit veniam
            voluptas voluptatum? Doloremque doloribus illum libero magni odio
            sapiente unde! Adipisci alias aliquam aliquid amet, animi aspernatur
            at aut beatae consectetur cum distinctio dolorem ea eligendi error
            ex explicabo fuga harum laborum magni minus modi molestiae molestias
            nisi nulla officiis perferendis placeat quam ratione recusandae
            sapiente sint tempora tempore veniam. A aliquam architecto atque
            cumque dignissimos dolore dolorem dolores ducimus eos facere, harum
            id illum ipsa iure laudantium mollitia natus numquam placeat porro
            provident recusandae reprehenderit rerum saepe sint tempore vitae
            voluptatum. Accusamus assumenda doloribus itaque ratione veritatis?
            Aliquam aut consequatur consequuntur cum debitis, dolore earum et
            eum expedita fuga, id illum ipsa iusto laudantium modi molestiae nam
            quas quia quisquam repudiandae similique temporibus tenetur totam
            vero, voluptas! Ad aspernatur atque aut beatae consequuntur delectus
            distinctio doloremque dolorum ducimus earum enim esse exercitationem
            explicabo facere fugiat id in inventore ipsa iste itaque libero,
            molestias mollitia nemo officia omnis perferendis provident quam
            quas quasi qui sapiente soluta sunt voluptas! Amet, aut commodi
            deserunt fuga labore magnam nam natus nihil quasi quidem ratione
            reprehenderit saepe suscipit ullam voluptatem? Dicta laborum
            molestiae nesciunt quam voluptate. Aperiam consequatur distinctio
            impedit incidunt iure iusto saepe, temporibus. Amet at consequatur,
            est eveniet impedit iste labore totam velit veritatis vitae. Alias
            esse harum officia quae quibusdam quos ut. Doloribus eius iste non
            nulla perspiciatis reiciendis rerum ullam, voluptas. Accusantium in
            iste iusto? Accusantium aliquid deserunt et exercitationem inventore
            ipsum iste, odit pariatur praesentium quos soluta ullam velit
            veniam. A ad asperiores at aut cumque dicta dignissimos enim error
            est et explicabo facilis hic illo in ipsa iste laboriosam libero
            maxime natus nemo nisi non odit officiis, pariatur praesentium
            recusandae sapiente similique sint sunt tempore veritatis voluptas
            voluptate voluptates! Adipisci consectetur consequatur dignissimos
            eius, eos est id natus quam quas qui, rerum tempore voluptates! Ab
            at beatae cumque cupiditate dicta, dolor eligendi, esse est, maxime
            nisi officia omnis pariatur sit sunt suscipit? At consequatur ea
            impedit non, sapiente voluptatum. Assumenda blanditiis explicabo
            magni, molestiae nam ratione? Aspernatur autem doloribus earum
            numquam omnis quae quidem quis quisquam ratione vitae. Amet enim
            esse nobis quo? Aliquid consectetur debitis dolore doloremque ea
            eius eos eum excepturi exercitationem facilis itaque laboriosam modi
            molestiae nam odio optio perferendis, possimus praesentium quam
            rerum saepe sit, tenetur vel, voluptatem voluptatibus? Accusantium
            dolores laborum tempore? Alias amet assumenda autem consectetur
            deserunt, dolore, error et exercitationem inventore iusto magni non
            numquam provident qui reiciendis sapiente tenetur. Adipisci esse
            inventore iusto pariatur similique totam. Ab aliquid consequatur
            debitis dolorem ea esse explicabo, fugiat inventore iure maiores
            mollitia natus nobis odit officia pariatur placeat possimus quisquam
            quo repudiandae suscipit tenetur veniam veritatis voluptas. A ab
            accusamus accusantium ad aliquid animi cum cumque, deleniti dolore
            dolorem doloremque enim, esse eum explicabo facere facilis in ipsam
            itaque labore maxime modi odio provident quis repellat tempore
            tenetur voluptas voluptatibus. Asperiores cumque deleniti distinctio
            dolor eius eveniet exercitationem hic illum ipsum iste, molestias
            nemo nisi, obcaecati odio perferendis quam quo soluta vel voluptates
            voluptatibus? Animi atque deleniti deserunt dicta dolorum ducimus,
            eveniet fugiat fugit harum ipsam magnam necessitatibus, nobis optio
            perferendis possimus tempore voluptatum. Asperiores consectetur
            consequuntur cupiditate dolorem excepturi in iusto minus officia
            praesentium provident quasi quod, suscipit totam vel veniam vero
            voluptates. Accusamus adipisci aliquam amet aspernatur assumenda at
            aut consequatur cum cupiditate dicta distinctio doloremque dolores
            ducimus eos est eum ex excepturi fuga, harum laborum laudantium
            magnam mollitia nam nisi non nulla officia optio praesentium quam
            quidem reiciendis repellat saepe voluptatum! Aperiam, asperiores aut
            consequuntur, delectus deleniti eaque eius, et excepturi facere
            fugiat fugit incidunt ipsum labore odit pariatur perferendis placeat
            provident qui ratione reiciendis repellat reprehenderit sit velit?
            Architecto deserunt earum ex explicabo, inventore, libero magni
            nihil nostrum, quasi repudiandae sint tempora! Deserunt dolorem
            exercitationem explicabo illo modi, rem ullam. Adipisci, alias
            asperiores, beatae consectetur culpa cum dolores ducimus eaque enim
            esse ex explicabo fugiat fugit in inventore, iste iure iusto maiores
            modi mollitia nam nesciunt nisi nobis nulla odio odit perferendis
            quasi quibusdam quis quisquam quo quos ratione rem sapiente vero
            voluptas voluptatem? Alias at autem eius incidunt inventore qui
            quisquam quo voluptatum? Adipisci architecto at cum debitis est, et
            eveniet hic id inventore iure labore minus molestias mollitia nemo
            nobis numquam odit omnis possimus quaerat quibusdam quo quod sequi
            vel veniam veritatis vitae voluptatem. Commodi cupiditate dicta
            eligendi excepturi in laudantium nam nisi non perferendis
            perspiciatis, quisquam sint suscipit tenetur. Ab accusamus enim et
            ipsa libero, nesciunt odio optio rerum? Ab aliquid dolor dolore et
            laudantium numquam reiciendis similique unde veritatis. Culpa eaque
            incidunt nostrum nulla obcaecati odio officiis provident totam
            ullam? Ad animi asperiores blanditiis cupiditate delectus,
            distinctio dolor dolore eum excepturi harum illo illum itaque
            laborum minima molestias nihil odio pariatur placeat possimus
            provident quasi quibusdam quod reiciendis reprehenderit temporibus.
            Ad beatae consequatur facilis id illo magnam natus nostrum quae qui
            ratione. Corporis dicta doloremque eum in iure nam, numquam officia
            pariatur porro quae, sequi suscipit! Animi dignissimos laudantium
            maiores modi nostrum provident sunt. Alias aliquid at ea eius
            excepturi, modi natus possimus repellendus saepe sequi! Accusantium
            ad aliquid cum cupiditate delectus dolor dolorum, eaque est eveniet
            fugiat illo maxime mollitia nesciunt nihil numquam, odio optio
            possimus quae quaerat recusandae tempore ullam, velit veniam
            voluptas voluptatibus? A aperiam commodi eaque ex id impedit iste
            labore nisi recusandae velit!
        </div>
    );
};
